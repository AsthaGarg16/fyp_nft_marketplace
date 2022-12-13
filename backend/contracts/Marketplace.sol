// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

error PriceNotMet(address nftAddress, uint256 tokenId, uint256 price);
error ItemNotForSale(address nftAddress, uint256 tokenId);
error NotListed(address nftAddress, uint256 tokenId);
error AlreadyListed(address nftAddress, uint256 tokenId);
error NoProceeds();
error NotOwner();
error NotApprovedForMarketplace();
error PriceMustBeAboveZero();
error NotEnoughQuantityHeld();

// Error thrown for isNotOwner modifier
// error IsNotOwner()

contract NftMarketplace is ReentrancyGuard {
    /// @notice Events for the contract
    event ItemListed(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 quantity,
        uint256 price,
        uint256 startingTime
    );

    event ItemCanceled(address indexed seller, address indexed nftAddress, uint256 indexed tokenId);

    event ItemBought(
        address indexed buyer,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 price,
        uint256 quantity
    );

    event ItemUpdated(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 newPrice
    );

    event OfferCreated(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 quantity,
        uint256 price,
        uint256 deadline
    );
    event OfferCanceled(
        address indexed seller,
        address indexed nftAddress,
        uint256 indexed tokenId
    );

    event UpdatePlatformFee(uint16 platformFee);
    event UpdatePlatformFeeRecipient(address payable platformFeeRecipient);

    /// @notice Structure for listed items
    struct Listing {
        uint256 quantity;
        uint256 price;
        uint256 startingTime;
    }

    /// @notice Structure for offer
    struct Offer {
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

        isOwner(_nftAddress, _tokenId, _owner);

        require(_getNow() >= listedItem.startingTime, "item not buyable");
        _;
    }

    modifier isOwner(
        address nftAddress,
        uint256 tokenId,
        address spender
    ) {
        IERC721 nft = IERC721(nftAddress);
        address owner = nft.ownerOf(tokenId);
        if (spender != owner) {
            revert NotOwner();
        }
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

    constructor(address payable _feeRecipient, uint16 _platformFee) public {
        platformFee = _platformFee;
        feeReceipient = _feeRecipient;
    }

    ////////////////////
    // Main Functions //
    ////////////////////
    /**
     @notice Method for listing NFT
     @param _nftAddress Address of NFT contract
     @param _tokenId Token ID of NFT
     @param _price sale price for each item
     @param _startingTime scheduling for a future sale
     */
    function listItem(
        address _nftAddress,
        uint256 _tokenId,
        uint256 _quantity,
        uint256 _price,
        uint256 _startingTime
    )
        external
        notListed(_nftAddress, _tokenId, msg.sender)
        isOwner(_nftAddress, _tokenId, msg.sender)
    {
        if (_price <= 0) {
            revert PriceMustBeAboveZero();
        }
        IERC721 nft = IERC721(_nftAddress);
        if (nft.getApproved(_tokenId) != address(this)) {
            revert NotApprovedForMarketplace();
        }
        if (nft.balanceOf(msg.sender, _tokenId) < _quantity) {
            revert NotEnoughQuantityHeld();
        }
        listings[_nftAddress][_tokenId][msg.sender] = Listing(_quantity, _price, _startingTime);
        emit ItemListed(msg.sender, _nftAddress, _tokenId, _quantity, _price, _startingTime);
    }

    /**
     @notice Method for cancelling listing
     @param _nftAddress Address of NFT contract
     @param _tokenId Token ID of NFT
     */
    function cancelListing(
        address _nftAddress,
        uint256 _tokenId
    ) external isOwner(_nftAddress, _tokenId, msg.sender) isListed(_nftAddress, _tokenId) {
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
        address _owner
    )
        external
        payable
        isListed(_nftAddress, _tokenId)
        validListing(_nftAddress, _tokenId, _owner)
        // isNotOwner(nftAddress, tokenId, msg.sender)
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
        _buyItem(_nftAddress, _tokenId, _owner);
    }

    function _buyItem(address _nftAddress, uint256 _tokenId, address _owner) private {
        Listing memory listedItem = listings[_nftAddress][_tokenId][_owner];

        uint256 price = listedItem.price.mul(listedItem.quantity);
        uint256 feeAmount = price.mul(platformFee).div(1e3);
        payable(feeReceipient).transfer(feeAmount);

        // IERC20(_payToken).safeTransferFrom(msg.sender, feeReceipient, feeAmount);

        address minter = minters[_nftAddress][_tokenId];
        uint16 royalty = royalties[_nftAddress][_tokenId];
        if (minter != address(0) && royalty != 0) {
            uint256 royaltyFee = price.sub(feeAmount).mul(royalty).div(10000);
            payable(minter).transfer(royaltyFee);
            //IERC20(_payToken).safeTransferFrom(msg.sender, minter, royaltyFee);

            feeAmount = feeAmount.add(royaltyFee);
        } else {
            minter = collectionRoyalties[_nftAddress].feeRecipient;
            royalty = collectionRoyalties[_nftAddress].royalty;
            if (minter != address(0) && royalty != 0) {
                uint256 royaltyFee = price.sub(feeAmount).mul(royalty).div(10000);
                payable(minter).transfer(royaltyFee);
                //IERC20(_payToken).safeTransferFrom(msg.sender, minter, royaltyFee);

                feeAmount = feeAmount.add(royaltyFee);
            }
        }
        payable(_owner).transfer(price.sub(feeAmount));
        //IERC20(_payToken).safeTransferFrom(msg.sender, _owner, price.sub(feeAmount));

        // Transfer NFT to buyer
        //address = INTERFACE_ID_ERC721
        if (IERC165(_nftAddress).supportsInterface("")) {
            IERC721(_nftAddress).safeTransferFrom(_owner, msg.sender, _tokenId);
        } else {
            // IERC1155(_nftAddress).safeTransferFrom(
            //     _owner,
            //     msg.sender,
            //     _tokenId,
            //     listedItem.quantity,
            //     bytes("")
            // );
        }
        // IFantomBundleMarketplace(addressRegistry.bundleMarketplace()).validateItemSold(
        //     _nftAddress,
        //     _tokenId,
        //     listedItem.quantity
        // );

        emit ItemBought(
            msg.sender,
            _nftAddress,
            _tokenId,
            listedItem.quantity,
            price.div(listedItem.quantity),
            listedItem.quantity
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
        uint256 _newPrice
    )
        external
        isListed(_nftAddress, _tokenId)
        nonReentrant
        isOwner(_nftAddress, _tokenId, msg.sender)
    {
        if (_newPrice <= 0) {
            revert PriceMustBeAboveZero();
        }
        listings[_nftAddress][_tokenId].price = _newPrice;
        emit ItemUpdated(msg.sender, _nftAddress, _tokenId, _newPrice);
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
        uint256 _quantity,
        uint256 _price,
        uint256 _deadline
    ) external offerNotExists(_nftAddress, _tokenId, msg.sender) {
        // require(
        //     IERC165(_nftAddress).supportsInterface(INTERFACE_ID_ERC721) ||
        //         IERC165(_nftAddress).supportsInterface(INTERFACE_ID_ERC1155),
        //     "invalid nft address"
        // );

        // IFantomAuction auction = IFantomAuction(addressRegistry.auction());

        // (, , , uint256 startTime, , bool resulted) = auction.auctions(_nftAddress, _tokenId);

        // require(startTime == 0 || resulted == true, "cannot place an offer if auction is going on");

        // require(_deadline > _getNow(), "invalid expiration");

        offers[_nftAddress][_tokenId][msg.sender] = Offer(_quantity, _price, _deadline);

        emit OfferCreated(msg.sender, _nftAddress, _tokenId, _quantity, _price, _deadline);
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
    )
        external
        nonReentrant
        offerExists(_nftAddress, _tokenId, _creator)
        isOwner(_nftAddress, _tokenId, msg.sender)
    {
        Offer memory offer = offers[_nftAddress][_tokenId][_creator];

        uint256 price = offer.price.mul(offer.quantity);
        uint256 feeAmount = price.mul(platformFee).div(1e3);
        uint256 royaltyFee;
        payable(this).transfer(_creator, feeAmount);
        payable(feeReceipient).transfer(feeAmount);

        address minter = minters[_nftAddress][_tokenId];
        uint16 royalty = royalties[_nftAddress][_tokenId];

        if (minter != address(0) && royalty != 0) {
            royaltyFee = price.sub(feeAmount).mul(royalty).div(10000);
            payable(this).transfer(_creator, royaltyFee);
            payable(minter).transfer(royaltyFee);
            feeAmount = feeAmount.add(royaltyFee);
        } else {
            minter = collectionRoyalties[_nftAddress].feeRecipient;
            royalty = collectionRoyalties[_nftAddress].royalty;
            if (minter != address(0) && royalty != 0) {
                royaltyFee = price.sub(feeAmount).mul(royalty).div(10000);
                payable(this).transfer(_creator, royaltyFee);
                payable(minter).transfer(royaltyFee);
                //offer.payToken.safeTransferFrom(_creator, minter, royaltyFee);
                feeAmount = feeAmount.add(royaltyFee);
            }
        }

        offer.payToken.safeTransferFrom(_creator, msg.sender, price.sub(feeAmount));

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
        IFantomBundleMarketplace(addressRegistry.bundleMarketplace()).validateItemSold(
            _nftAddress,
            _tokenId,
            offer.quantity
        );

        emit ItemSold(
            msg.sender,
            _creator,
            _nftAddress,
            _tokenId,
            offer.quantity,
            address(offer.payToken),
            getPrice(address(offer.payToken)),
            offer.pricePerItem
        );

        emit OfferCanceled(_creator, _nftAddress, _tokenId);

        delete (listings[_nftAddress][_tokenId][msg.sender]);
        delete (offers[_nftAddress][_tokenId][_creator]);
    }

    /**
     @notice Method for withdrawing proceeds from sales
     */
    function withdrawProceeds() external {
        // uint256 proceeds = s_proceeds[msg.sender];
        // if (proceeds <= 0) {
        //     revert NoProceeds();
        // }
        // s_proceeds[msg.sender] = 0;
        // (bool success, ) = payable(msg.sender).call{value: proceeds}("");
        // require(success, "Transfer failed");
    }

    //////////////////////
    // Getter Functions //
    //////////////////////

    function getListing(
        address nftAddress,
        uint256 tokenId
    ) external view returns (Listing memory) {
        return Listing[nftAddress][tokenId];
    }

    function getProceeds(address seller) external view returns (uint256) {
        // return s_proceeds[seller];
    }

    ////////////////////////////////////
    // Internal and private Functions //
    ////////////////////////////////////

    function _getNow() internal view virtual returns (uint256) {
        return block.timestamp;
    }

    function _deleteListing(
        address _nftAddress,
        uint256 _tokenId,
        address _owner
    ) private isOwner(_nftAddress, _tokenId, msg.sender) {
        Listing memory listedItem = listings[_nftAddress][_tokenId][_owner];

        // isOwner(_nftAddress, _tokenId, _owner, listedItem.quantity);

        delete (listings[_nftAddress][_tokenId][_owner]);
        emit ItemCanceled(_owner, _nftAddress, _tokenId);
    }
}
