// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Basic_Nft is ERC721, ERC721URIStorage {
    constructor() public {
        // Set the name and symbol for the NFT
        _mint(msg.sender, 1, "My NFT");
        _mint(msg.sender, 2, "My NFT");
        _mint(msg.sender, 3, "My NFT");
        _mint(msg.sender, 4, "My NFT");
    }

    function mintNFT(string memory assetURI, string memory metaData) public {
        uint256 newTokenId = _totalSupply() + 1;
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, assetURI);
        _setTokenMetadata(newTokenId, metaData);
    }

    function _setTokenMetadata(uint256 tokenId, string memory metaData) internal {
        require(_tokenExists(tokenId), "Token does not exist");
        // Store the metadata in the contract storage
        tokenMetadata[tokenId] = metaData;
    }

    function _setTokenURI(uint256 tokenId, string memory assetURI) internal {
        require(_tokenExists(tokenId), "Token does not exist");
        // Store the URI in the contract storage
        tokenURIs[tokenId] = assetURI;
    }

    mapping(uint256 => string) private tokenMetadata;
    mapping(uint256 => string) private tokenURIs;
}
