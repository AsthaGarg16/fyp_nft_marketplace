// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Reviews {
    /// @notice Events for the contract
    event ReviewAdded(
        address indexed nftAddress,
        uint256 indexed tokenId,
        address reviewer,
        string content
    );
    event ReviewDeleted(address indexed nftAddress, uint256 indexed tokenId, address reviewer);
    event AddLiked(address indexed nftAddress, uint256 indexed tokenId, address reviewer);
    event RemoveLiked(address indexed nftAddress, uint256 indexed tokenId, address reviewer);

    /// @notice Structure for review
    struct Review {
        address reviewer;
        string content;
    }

    /// @notice nft -> token -> user -> review
    mapping(address => mapping(uint256 => mapping(address => string))) public reviews;

    /// @notice nft -> token -> user
    mapping(address => mapping(uint256 => address[])) public likes;

    function addReview(address nft, uint256 tokenid, string calldata review) external {
        reviews[nft][tokenid][msg.sender] = review;
        emit ReviewAdded(nft, tokenid, msg.sender, review);
    }

    function deleteReview(address nft, uint256 tokenid) external {
        delete (reviews[nft][tokenid][msg.sender]);
        emit ReviewDeleted(nft, tokenid, msg.sender);
    }

    function liked(address nft, uint256 tokenid) external {
        likes[nft][tokenid].push(msg.sender);
        emit AddLiked(nft, tokenid, msg.sender);
    }

    function unliked(address nft, uint256 tokenid) external {
        for (uint i = 0; i < likes[nft][tokenid].length; i++) {
            if (likes[nft][tokenid][i] == msg.sender) {
                likes[nft][tokenid][i] = likes[nft][tokenid][likes[nft][tokenid].length - 1];
            }
            likes[nft][tokenid].pop();
        }
        emit RemoveLiked(nft, tokenid, msg.sender);
    }
}
