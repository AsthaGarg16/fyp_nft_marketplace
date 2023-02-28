// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/interfaces/IERC165.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AddressRegistry is Ownable {
    bytes4 private constant INTERFACE_ID_ERC721 = 0x80ac58cd;

    /// @notice NFT contract
    address public basicNft;

    /// @notice Auction contract
    address public auction;

    /// @notice FantomMarketplace contract
    address public marketplace;

    /// @notice TokenRegistry contract
    address public tokenRegistry;

    /// @notice Fractional NFT contract
    address public fNft;

    /// @notice Collection contract
    address public collection;

    /// @notice Reviews contract
    address public reviews;

    /// @notice User contract
    address public users;

    /**
     @notice Update basic_nft contract
     @dev Only admin
     */
    function updateBasicNft(address _nft) external onlyOwner {
        require(IERC165(_nft).supportsInterface(INTERFACE_ID_ERC721), "Not ERC721");
        basicNft = _nft;
    }

    /**
     @notice Update fractional nft contract
     @dev Only admin
     */
    function updateFractionalNFT(address _fnft) external onlyOwner {
        fNft = _fnft;
    }

    /**
     @notice Update Auction contract
     @dev Only admin
     */
    function updateAuction(address _auction) external onlyOwner {
        auction = _auction;
    }

    /**
     @notice Update Marketplace contract
     @dev Only admin
     */
    function updateMarketplace(address _marketplace) external onlyOwner {
        marketplace = _marketplace;
    }

    /**
     @notice Update token registry contract
     @dev Only admin
     */
    function updateTokenRegistry(address _tokenRegistry) external onlyOwner {
        tokenRegistry = _tokenRegistry;
    }

    /**
     @notice Update collection contract
     @dev Only admin
     */
    function updateCollection(address _collection) external onlyOwner {
        collection = _collection;
    }

    /**
     @notice Update reviews registry contract
     @dev Only admin
     */
    function updateReviews(address _reviews) external onlyOwner {
        reviews = _reviews;
    }

    /**
     @notice Update users registry contract
     @dev Only admin
     */
    function updateUsers(address _users) external onlyOwner {
        users = _users;
    }
}
