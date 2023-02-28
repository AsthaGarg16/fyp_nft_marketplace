// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Users {
    using SafeERC20 for IERC20;
    /// @notice Events for the contract
    event WalletConnected(address indexed user, string infoUri);
    event DonateDetails(address indexed user, uint256 amt, address paytoken);

    event ProfileUpdated(address indexed user, string infoUri);
    event FollowerAdded(address indexed creator, address indexed follower);
    event FollowerRemoved(address indexed creator, address indexed follower);

    /// @notice Structure for nft info
    struct Nft {
        address nftAddress;
        uint256 tokenId;
    }

    /// @notice User -> NFTs in cart
    mapping(address => Nft[]) public cart;
    /// @notice User address -> URI for details
    mapping(address => string) public users;
    // /// @notice User address -> uint256 amt -> address paytoken -> list of followers
    // mapping(address => mapping(uint256 => mapping(address => address[]))) public followers;

    mapping(address => address[]) public followers;
    mapping(address => mapping(address => uint256)) donateDetails;

    function createUser(string calldata infouri, uint256 amt, address payToken) external {
        users[msg.sender] = infouri;
        donateDetails[msg.sender][payToken] = amt;
        emit WalletConnected(msg.sender, infouri);
        emit DonateDetails(msg.sender, amt, payToken);
    }

    function updateUser(string calldata infouri) external {
        users[msg.sender] = infouri;
        emit ProfileUpdated(msg.sender, infouri);
    }

    function addFollower(address creator, address paytoken, uint256 amt) external {
        IERC20(paytoken).safeTransferFrom(msg.sender, creator, amt);
        followers[creator].push(msg.sender);
    }

    function removeFollower(address creator) external {
        for (uint i = 0; i < followers[creator].length; i++) {
            if (followers[creator][i] == msg.sender) {
                followers[creator][i] = followers[creator][followers[creator].length - 1];
            }
            followers[creator].pop();
        }

        emit FollowerRemoved(creator, msg.sender);
    }
}
