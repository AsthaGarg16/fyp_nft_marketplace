// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IAddressRegistry {
    function auction() external view returns (address);

    //function marketplace() external view returns (address);

    function tokenRegistry() external view returns (address);
}

interface IMarketAuction {
    function auctions(
        address,
        uint256
    ) external view returns (address, address, uint256, uint256, uint256, bool);
}

interface ITokenRegistry {
    function enabled(address) external view returns (bool);
}

contract NftMarketplace is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    /// @notice Events for the contract
    event ItemListed(
        address indexed seller,
        address indexed nftAddress,
        uint256 tokenId,
        address payToken,
        uint256 quantity,
        uint256 pricePerItem,
        uint256 startingTime
    );

    event ItemSold(
        address indexed seller,
        address indexed buyer,
        address indexed nft,
        uint256 tokenId,
        uint256 quantity,
        address payToken,
        uint256 pricePerItem
    );
    event ItemUpdated(
        address indexed owner,
        address indexed nft,
        uint256 tokenId,
        address payToken,
        uint256 newPrice
    );

    event ItemCanceled(address indexed owner, address indexed nft, uint256 tokenId);

    event OfferCreated(
        address indexed creator,
        address indexed nft,
        uint256 tokenId,
        uint256 quantity,
        address payToken,
        uint256 pricePerItem,
        uint256 deadline
    );
    event OfferCanceled(address indexed creator, address indexed nft, uint256 tokenId);

    event UpdatePlatformFee(uint16 platformFee);
    event UpdatePlatformFeeRecipient(address payable platformFeeRecipient);

    /// @notice Structure for listed items
    struct Listing {
        uint256 quantity;
        address payToken;
        uint256 pricePerItem;
        uint256 startingTime;
    }

    /// @notice Structure for offer
    struct Offer {
        IERC20 payToken;
        uint256 quantity;
        uint256 pricePerItem;
        uint256 deadline;
    }

    struct CollectionRoyalty {
        uint16 royalty;
        address creator;
        address feeRecipient;
    }

    bytes4 private constant INTERFACE_ID_ERC20 = 0x36372b07;
    bytes4 private constant INTERFACE_ID_ERC721 = 0x80ac58cd;
    bytes4 private constant INTERFACE_ID_ERC1155 = 0xd9b67a26;

    /// @notice NftAddress -> Token ID -> Minter
    mapping(address => mapping(uint256 => address)) public minters;

    /// @notice NftAddress -> Token ID -> Royalty
    mapping(address => mapping(uint256 => uint16)) public royalties;

    /// @notice NftAddress -> Token ID -> Owner -> Listing item
    mapping(address => mapping(uint256 => mapping(address => Listing))) public listings;

    // mapping(address => mapping(uint256 => Listing)) private listings;

    /// @notice NftAddress -> Token ID -> Offerer -> Offer
    mapping(address => mapping(uint256 => mapping(address => Offer))) public offers;

    /// @notice Platform fee
    uint16 public platformFee;

    /// @notice Platform fee receipient
    address payable public feeReceipient;

    /// @notice NftAddress -> Royalty
    mapping(address => CollectionRoyalty) public collectionRoyalties;

    /// @notice Address registry
    IAddressRegistry public addressRegistry;

    // mapping(address => uint256) private s_proceeds;

    modifier isListed(
        address _nftAddress,
        uint256 _tokenId,
        address _owner
    ) {
        Listing memory listing = listings[_nftAddress][_tokenId][_owner];
        require(listing.quantity > 0, "not listed item");
        _;
    }

    modifier notListed(
        address _nftAddress,
        uint256 _tokenId,
        address _owner
    ) {
        Listing memory listing = listings[_nftAddress][_tokenId][_owner];
        require(listing.quantity == 0, "already listed");
        _;
    }

    modifier validListing(
        address _nftAddress,
        uint256 _tokenId,
        address _owner
    ) {
        Listing memory listedItem = listings[_nftAddress][_tokenId][_owner];

        _validOwner(_nftAddress, _tokenId, _owner, listedItem.quantity);

        // IERC721 nft = IERC721(_nftAddress);
        // address owner = nft.ownerOf(_tokenId);
        // if (_owner != owner) {
        //     revert NotOwner();
        // }

        require(_getNow() >= listedItem.startingTime, "item not buyable");
        _;
    }

    modifier offerExists(
        address _nftAddress,
        uint256 _tokenId,
        address _creator
    ) {
        Offer memory offer = offers[_nftAddress][_tokenId][_creator];
        require(offer.quantity > 0 && offer.deadline > _getNow(), "offer not exists or expired");
        _;
    }

    modifier offerNotExists(
        address _nftAddress,
        uint256 _tokenId,
        address _creator
    ) {
        Offer memory offer = offers[_nftAddress][_tokenId][_creator];
        require(offer.quantity == 0 || offer.deadline <= _getNow(), "offer already created");
        _;
    }

    constructor(address payable _feeRecipient, uint16 _platformFee) {
        platformFee = _platformFee;
        feeReceipient = _feeRecipient;
        // __Ownable_init();
        // __ReentrancyGuard_init();
    }

    ////////////////////
    // Main Functions //
    ////////////////////
    /**
     @notice Method for listing NFT
     @param _nftAddress Address of NFT contract
     @param _tokenId Token ID of NFT
     @param _pricePerItem sale price for each item
     @param _startingTime scheduling for a future sale
     */
    function listItem(
        address _nftAddress,
        uint256 _tokenId,
        uint256 _quantity,
        address _payToken,
        uint256 _pricePerItem,
        uint256 _startingTime
    ) external notListed(_nftAddress, _tokenId, msg.sender) {
        if (IERC165(_nftAddress).supportsInterface(INTERFACE_ID_ERC721)) {
            IERC721 nft = IERC721(_nftAddress);
            require(nft.ownerOf(_tokenId) == _msgSender(), "not owning item");
            require(nft.isApprovedForAll(_msgSender(), address(this)), "item not approved");
        } else if (IERC165(_nftAddress).supportsInterface(INTERFACE_ID_ERC1155)) {
            IERC1155 nft = IERC1155(_nftAddress);
            require(nft.balanceOf(_msgSender(), _tokenId) >= _quantity, "must hold enough nfts");
            require(nft.isApprovedForAll(_msgSender(), address(this)), "item not approved");
        } else {
            revert("invalid nft address");
        }
        // _validPayToken(_payToken);

        listings[_nftAddress][_tokenId][msg.sender] = Listing(
            _quantity,
            _payToken,
            _pricePerItem,
            _startingTime
        );
        emit ItemListed(
            msg.sender,
            _nftAddress,
            _tokenId,
            _payToken,
            _quantity,
            _pricePerItem,
            _startingTime
        );
    }

    /**
     @notice Method for cancelling listing
     @param _nftAddress Address of NFT contract
     @param _tokenId Token ID of NFT
     */
    function cancelListing(
        address _nftAddress,
        uint256 _tokenId
    ) external isListed(_nftAddress, _tokenId, msg.sender) {
        // delete (listings[_nftAddress][_tokenId]);
        // emit ItemCanceled(msg.sender, _nftAddress, _tokenId);
        _deleteListing(_nftAddress, _tokenId, msg.sender);
    }

    /**
     @notice Method for buying listing
     @notice The owner of an NFT could unapprove the marketplace,
     which would cause this function to fail
     Ideally you'd also have a `createOffer` functionality.
     @param _nftAddress Address of NFT contract
     @param _tokenId Token ID of NFT
     @param _owner Owner of NFT
     */
    function buyItem(
        address _nftAddress,
        uint256 _tokenId,
        address _payToken,
        address _owner
    )
        external
        payable
        isListed(_nftAddress, _tokenId, _owner)
        validListing(_nftAddress, _tokenId, _owner)
        nonReentrant
    {
        // Listing memory listedItem = listings[_nftAddress][_tokenId][_owner];
        // if (msg.value < listedItem.price) {
        //     revert PriceNotMet(_nftAddress, _tokenId, listedItem.price);
        // }
        // s_proceeds[listedItem.seller] += msg.value;
        // delete (listings[_nftAddress][_tokenId]);
        // IERC721(_nftAddress).safeTransferFrom(listedItem.seller, msg.sender, _tokenId);
        // emit ItemBought(msg.sender, _nftAddress, _tokenId, listedItem.price);
        Listing memory listedItem = listings[_nftAddress][_tokenId][_owner];
        require(listedItem.payToken == _payToken, "invalid pay token");
        _buyItem(_nftAddress, _tokenId, _payToken, _owner);
    }

    function _buyItem(
        address _nftAddress,
        uint256 _tokenId,
        address _payToken,
        address _owner
    ) private {
        Listing memory listedItem = listings[_nftAddress][_tokenId][_owner];

        uint256 price = listedItem.pricePerItem * (listedItem.quantity);
        uint256 feeAmount = (price * (platformFee)) / (1e3);
        IERC20(_payToken).safeTransferFrom(msg.sender, feeReceipient, feeAmount);

        address minter = minters[_nftAddress][_tokenId];
        uint16 royalty = royalties[_nftAddress][_tokenId];
        if (minter != address(0) && royalty != 0) {
            uint256 royaltyFee = ((price - feeAmount) * (royalty)) / (10000);
            IERC20(_payToken).safeTransferFrom(msg.sender, minter, royaltyFee);

            feeAmount = feeAmount + (royaltyFee);
        } else {
            minter = collectionRoyalties[_nftAddress].feeRecipient;
            royalty = collectionRoyalties[_nftAddress].royalty;
            if (minter != address(0) && royalty != 0) {
                uint256 royaltyFee = ((price - feeAmount) * (royalty)) / (10000);
                IERC20(_payToken).safeTransferFrom(msg.sender, minter, royaltyFee);
                feeAmount = feeAmount + (royaltyFee);
            }
        }
        IERC20(_payToken).safeTransferFrom(msg.sender, _owner, price - feeAmount);
        // Transfer NFT to buyer
        if (IERC165(_nftAddress).supportsInterface(INTERFACE_ID_ERC721)) {
            IERC721(_nftAddress).safeTransferFrom(_owner, msg.sender, _tokenId);
        } else {
            IERC1155(_nftAddress).safeTransferFrom(
                _owner,
                msg.sender,
                _tokenId,
                listedItem.quantity,
                bytes("")
            );
        }

        emit ItemSold(
            _owner,
            msg.sender,
            _nftAddress,
            _tokenId,
            listedItem.quantity,
            _payToken,
            price / listedItem.quantity
        );
        delete (listings[_nftAddress][_tokenId][_owner]);
    }

    /**
     @notice Method for updating listing
     @param _nftAddress Address of NFT contract
     @param _tokenId Token ID of NFT
     @param _newPrice Price in Wei of the item
     */
    function updateListing(
        address _nftAddress,
        uint256 _tokenId,
        address _payToken,
        uint256 _newPrice
    ) external isListed(_nftAddress, _tokenId, msg.sender) nonReentrant {
        _validOwner(
            _nftAddress,
            _tokenId,
            msg.sender,
            listings[_nftAddress][_tokenId][msg.sender].quantity
        );

        //_validPayToken(_payToken);
        listings[_nftAddress][_tokenId][msg.sender].pricePerItem = _newPrice;
        listings[_nftAddress][_tokenId][msg.sender].payToken = _payToken;
        emit ItemUpdated(msg.sender, _nftAddress, _tokenId, _payToken, _newPrice);
    }

    /** 
     @notice Method for offering item
     @param _nftAddress NFT contract address
     @param _tokenId TokenId
     @param _quantity Quantity of items
     @param _price Price per item
     @param _deadline Offer expiration
     */
    function createOffer(
        address _nftAddress,
        uint256 _tokenId,
        IERC20 _payToken,
        uint256 _quantity,
        uint256 _price,
        uint256 _deadline
    ) external offerNotExists(_nftAddress, _tokenId, msg.sender) {
        require(
            IERC165(_nftAddress).supportsInterface(INTERFACE_ID_ERC721) ||
                IERC165(_nftAddress).supportsInterface(INTERFACE_ID_ERC1155),
            "invalid nft address"
        );

        IMarketAuction auction = IMarketAuction(addressRegistry.auction());

        (, , , uint256 startTime, , bool resulted) = auction.auctions(_nftAddress, _tokenId);

        require(startTime == 0 || resulted == true, "cannot place an offer if auction is going on");

        require(_deadline > _getNow(), "invalid expiration");

        offers[_nftAddress][_tokenId][msg.sender] = Offer(_payToken, _quantity, _price, _deadline);

        emit OfferCreated(
            msg.sender,
            _nftAddress,
            _tokenId,
            _quantity,
            address(_payToken),
            _price,
            _deadline
        );
    }

    /// @notice Method for canceling the offer
    /// @param _nftAddress NFT contract address
    /// @param _tokenId TokenId
    function cancelOffer(
        address _nftAddress,
        uint256 _tokenId
    ) external offerExists(_nftAddress, _tokenId, msg.sender) {
        delete (offers[_nftAddress][_tokenId][msg.sender]);
        emit OfferCanceled(msg.sender, _nftAddress, _tokenId);
    }

    /// @notice Method for accepting the offer
    /// @param _nftAddress NFT contract address
    /// @param _tokenId TokenId
    /// @param _creator Offer creator address
    function acceptOffer(
        address _nftAddress,
        uint256 _tokenId,
        address _creator
    ) external nonReentrant offerExists(_nftAddress, _tokenId, _creator) {
        Offer memory offer = offers[_nftAddress][_tokenId][_creator];
        _validOwner(_nftAddress, _tokenId, msg.sender, offer.quantity);
        uint256 price = offer.pricePerItem * (offer.quantity);
        uint256 feeAmount = (price * (platformFee)) / (1e3);
        uint256 royaltyFee;
        offer.payToken.safeTransferFrom(_creator, feeReceipient, feeAmount);

        address minter = minters[_nftAddress][_tokenId];
        uint16 royalty = royalties[_nftAddress][_tokenId];

        if (minter != address(0) && royalty != 0) {
            royaltyFee = ((price - feeAmount) * (royalty)) / (10000);
            offer.payToken.safeTransferFrom(_creator, minter, royaltyFee);
            // payable(minter).transfer(royaltyFee);
            feeAmount = feeAmount + (royaltyFee);
        } else {
            minter = collectionRoyalties[_nftAddress].feeRecipient;
            royalty = collectionRoyalties[_nftAddress].royalty;
            if (minter != address(0) && royalty != 0) {
                royaltyFee = ((price - feeAmount) * (royalty)) / (10000);
                //Fix
                //payable(this).transfer(_creator, royaltyFee);
                payable(minter).transfer(royaltyFee);
                offer.payToken.safeTransferFrom(_creator, minter, royaltyFee);
                feeAmount = feeAmount + (royaltyFee);
            }
        }
        offer.payToken.safeTransferFrom(_creator, msg.sender, price - (feeAmount));

        // Transfer NFT to buyer
        if (IERC165(_nftAddress).supportsInterface(INTERFACE_ID_ERC721)) {
            IERC721(_nftAddress).safeTransferFrom(msg.sender, _creator, _tokenId);
        } else {
            IERC1155(_nftAddress).safeTransferFrom(
                msg.sender,
                _creator,
                _tokenId,
                offer.quantity,
                bytes("")
            );
        }

        emit ItemSold(
            msg.sender,
            _creator,
            _nftAddress,
            _tokenId,
            offer.quantity,
            address(offer.payToken),
            // getPrice(address(offer.payToken)),
            offer.pricePerItem
        );

        emit OfferCanceled(_creator, _nftAddress, _tokenId);

        delete (listings[_nftAddress][_tokenId][msg.sender]);
        delete (offers[_nftAddress][_tokenId][_creator]);
    }

    //////////////////////
    // Getter Functions //
    //////////////////////

    function getListing(
        address nftAddress,
        uint256 tokenId
    ) external view returns (Listing memory) {
        return listings[nftAddress][tokenId][msg.sender];
    }

    ////////////////////////////////////
    // Internal and private Functions //
    ////////////////////////////////////

    function _getNow() internal view virtual returns (uint256) {
        return block.timestamp;
    }

    function _validOwner(
        address _nftAddress,
        uint256 _tokenId,
        address _owner,
        uint256 quantity
    ) internal view {
        if (IERC165(_nftAddress).supportsInterface(INTERFACE_ID_ERC721)) {
            IERC721 nft = IERC721(_nftAddress);
            require(nft.ownerOf(_tokenId) == _owner, "not owning item");
        } else if (IERC165(_nftAddress).supportsInterface(INTERFACE_ID_ERC1155)) {
            IERC1155 nft = IERC1155(_nftAddress);
            require(nft.balanceOf(_owner, _tokenId) >= quantity, "not owning item");
        } else {
            revert("invalid nft address");
        }
    }

    function _validPayToken(address _payToken) internal {
        require(
            _payToken == address(0) ||
                (addressRegistry.tokenRegistry() != address(0) &&
                    ITokenRegistry(addressRegistry.tokenRegistry()).enabled(_payToken)),
            "invalid pay token"
        );
    }

    function _deleteListing(address _nftAddress, uint256 _tokenId, address _owner) private {
        Listing memory listedItem = listings[_nftAddress][_tokenId][_owner];

        // isOwner(_nftAddress, _tokenId, _owner, listedItem.quantity);
        _validOwner(_nftAddress, _tokenId, _owner, listedItem.quantity);
        delete (listings[_nftAddress][_tokenId][_owner]);
        emit ItemCanceled(_owner, _nftAddress, _tokenId);
    }
}
