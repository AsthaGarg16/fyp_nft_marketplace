// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Collections is Ownable, ReentrancyGuard {
    /// @notice Events for the contract
    event CollectionCreated(
        string indexed name,
        string logoImage,
        string bannerImage,
        uint16 earnings,
        string category,
        string metaInfoUri,
        address creator
    );

    event AddedToCollection(string indexed name, address nftAddress, uint256 tokenId);

    event AddedToWatchlist(string indexed name, address indexed watcher);

    event RemovedFromWatchlist(string indexed name, address indexed watcher);

    /// @notice Structure for collection
    struct Collection {
        string logoImage;
        string bannerImage;
        uint16 earnings;
        string category;
        string metaInfoUri;
        address creator;
    }
    /// @notice Structure for nft info
    struct Nft {
        address nftAddress;
        uint256 tokenId;
    }

    /// @notice CollectionName -> Owner -> Collection
    mapping(string => mapping(address => Collection)) public collections;

    /// @notice CollectionName -> array of nfts
    mapping(string => Nft[]) collectionItems;

    mapping(string => address[]) watchers;

    // /**
    //  @notice Method for creating collection
    //  @param _nftAddress Address of NFT contract
    //  @param _tokenId Token ID of NFT
    //  @param _pricePerItem sale price for each item
    //  @param _startingTime scheduling for a future sale
    //  */
    function createCollection(
        string calldata name,
        string calldata logoImage,
        string calldata bannerImage,
        uint16 earnings,
        string calldata category,
        string calldata metaInfoUri
    ) external {
        collections[name][msg.sender] = Collection(
            logoImage,
            bannerImage,
            earnings,
            category,
            metaInfoUri,
            msg.sender
        );

        emit CollectionCreated(
            name,
            logoImage,
            bannerImage,
            earnings,
            category,
            metaInfoUri,
            msg.sender
        );
    }

    function addToCollection(
        string calldata collectionName,
        address nftAddress,
        uint256 tokenId
    ) external {
        collectionItems[collectionName].push(Nft(nftAddress, tokenId));
        emit AddedToCollection(collectionName, nftAddress, tokenId);
    }

    function addToWatchlist(string calldata collectionName) external {
        watchers[collectionName].push(msg.sender);
        emit AddedToWatchlist(collectionName, msg.sender);
    }

    function removeFromWatchlist(string calldata collectionName) external {
        for (uint i = 0; i < watchers[collectionName].length; i++) {
            if (watchers[collectionName][i] == msg.sender) {
                watchers[collectionName][i] = watchers[collectionName][
                    watchers[collectionName].length - 1
                ];
            }
            watchers[collectionName].pop();
        }
        emit RemovedFromWatchlist(collectionName, msg.sender);
    }
}
