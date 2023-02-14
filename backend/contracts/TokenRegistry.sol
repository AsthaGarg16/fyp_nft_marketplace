// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenRegistry is Ownable {
    /// @dev Events of the contract
    event TokenAdded(address token);
    event TokenRemoved(address token);

    /// @notice ERC20 Address -> Bool
    mapping(address => bool) public enabled;

    mapping(string => address) public tokens;

    /**
  @notice Method for adding payment token
  @dev Only admin
  @param token ERC20 token address
  */
    function add(address token, string memory name) external onlyOwner {
        require(!enabled[token], "token already added");
        tokens[name] = token;
        enabled[token] = true;
        emit TokenAdded(token);
    }

    /**
  @notice Method for removing payment token
  @dev Only admin
  @param token ERC20 token address
  */
    function remove(address token, string memory name) external onlyOwner {
        require(enabled[token], "token not exist");
        enabled[token] = false;
        tokens[name] = address(0);
        emit TokenRemoved(token);
    }
}
