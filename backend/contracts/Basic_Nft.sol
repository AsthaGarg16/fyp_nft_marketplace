// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Basic_Nft is ERC721 {
    uint256 private s_tokenCounter;
    mapping(uint256 => string) public id_to_assetURI;
    mapping(uint256 => string) public id_to_metadataURI;

    constructor() ERC721("MyNFT", "NFT") {
        s_tokenCounter = 0;
    }

    function mintNft() public {
        _safeMint(msg.sender, s_tokenCounter);
        s_tokenCounter = s_tokenCounter + 1;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        // require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return id_to_assetURI[tokenId];
    }

    function metadataURI(uint256 tokenId) public view returns (string memory) {
        // require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return id_to_metadataURI[tokenId];
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }
}
