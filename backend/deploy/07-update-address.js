const { network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const addressRegistry = await ethers.getContract("AddressRegistry", deployer)
    const nft = await ethers.getContract("Basic_Nft", deployer)
    const fnft = await ethers.getContract("Fractional", deployer)
    const auction = await ethers.getContract("MarketAuction", deployer)
    const marketplace = await ethers.getContract("NftMarketplace", deployer)
    const tokenRegistry = await ethers.getContract("TokenRegistry", deployer)

    const nftTx = await addressRegistry.updateBasicNft(nft.address)
    await nftTx.wait(1)
    console.log(`Basic_NFT address updated`)

    const auctionTx = await addressRegistry.updateAuction(auction.address)
    await auctionTx.wait(1)
    console.log(`Auction address updated`)

    const marketplaceTx = await addressRegistry.updateMarketplace(marketplace.address)
    await marketplaceTx.wait(1)
    console.log(`Marketplace address updated`)

    const tokenTx = await addressRegistry.updateTokenRegistry(tokenRegistry.address)
    await tokenTx.wait(1)
    console.log(`Token registry address updated`)

    const fnftTx = await addressRegistry.updateFractionalNFT(fnft.address)
    await fnftTx.wait(1)
    console.log(`Fractional NFT address updated`)

    const registryTx = await marketplace.updateAddressRegistry(addressRegistry.address)
    await registryTx.wait(1)
    console.log(`Address registry address updated in marketplace`)
}
module.exports.tags = ["all", "AddressUpdate"]
