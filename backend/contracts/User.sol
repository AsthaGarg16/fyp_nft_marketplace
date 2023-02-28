// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Users {
    /// @notice Events for the contract
    event WalletConnected(address user, string infoUri);

    event ProfileUpdated(address user, string infoUri);

    /// @notice Structure for nft info
    struct Nft {
        address nftAddress;
        uint256 tokenId;
    }

    /// @notice User -> NFTs in cart
    mapping(address => Nft[]) public cart;
    mapping(address => string) public users;

    function createUser(string calldata infouri) external {
        users[msg.sender] = infouri;
        emit WalletConnected(msg.sender, infouri);
    }

    function updateUser(string calldata infouri) external {
        users[msg.sender] = infouri;
        emit ProfileUpdated(msg.sender, infouri);
    }
}
