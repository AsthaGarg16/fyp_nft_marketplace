const { frontEndContractsFile, frontEndAbiLocation } = require("../helper-hardhat-config")
require("dotenv").config()
const fs = require("fs")
const { network } = require("hardhat")

module.exports = async () => {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Writing to front end...")
        //await updateContractAddresses()
        await updateAbi()
        console.log("Front end written!")
    }
}

async function updateAbi() {
    const addressRegistry = await ethers.getContract("AddressRegistry")
    fs.writeFileSync(
        `${frontEndAbiLocation}AddressRegistry.json`,
        addressRegistry.interface.format(ethers.utils.FormatTypes.json)
    )

    const nft = await ethers.getContract("Basic_Nft")
    fs.writeFileSync(
        `${frontEndAbiLocation}Basic_Nft.json`,
        nft.interface.format(ethers.utils.FormatTypes.json)
    )

    const fnft = await ethers.getContract("Fractional")
    fs.writeFileSync(
        `${frontEndAbiLocation}Fractional.json`,
        fnft.interface.format(ethers.utils.FormatTypes.json)
    )

    const auction = await ethers.getContract("MarketAuction")
    fs.writeFileSync(
        `${frontEndAbiLocation}MarketAuction.json`,
        auction.interface.format(ethers.utils.FormatTypes.json)
    )

    const marketplace = await ethers.getContract("NftMarketplace")
    fs.writeFileSync(
        `${frontEndAbiLocation}NftMarketplace.json`,
        marketplace.interface.format(ethers.utils.FormatTypes.json)
    )

    const tokens = await ethers.getContract("TokenRegistry")
    fs.writeFileSync(
        `${frontEndAbiLocation}TokenRegistry.json`,
        tokens.interface.format(ethers.utils.FormatTypes.json)
    )
}

async function updateContractAddresses() {
    const chainId = network.config.chainId.toString()
    console.log("chain id ", chainId)
    const addressRegistry = await ethers.getContract("AddressRegistry")
    var contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (chainId in contractAddresses) {
        if (!contractAddresses[chainId]["AddressRegistry"].includes(addressRegistry.address)) {
            contractAddresses[chainId]["AddressRegistry"].push(addressRegistry.address)
        }
    } else {
        contractAddresses[chainId] = { AddressRegistry: [addressRegistry.address] }
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))

    const nft = await ethers.getContract("Basic_Nft")
    contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (chainId in contractAddresses) {
        if (!contractAddresses[chainId]["Basic_Nft"].includes(nft.address)) {
            contractAddresses[chainId]["Basic_Nft"].push(nft.address)
        }
    } else {
        contractAddresses[chainId] = { Basic_Nft: [nft.address] }
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))

    const fnft = await ethers.getContract("Fractional")
    contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (chainId in contractAddresses) {
        if (!contractAddresses[chainId]["Fractional"].includes(fnft.address)) {
            contractAddresses[chainId]["Fractional"].push(fnft.address)
        }
    } else {
        contractAddresses[chainId] = { Fractional: [fnft.address] }
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))

    const auction = await ethers.getContract("MarketAuction")
    contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (chainId in contractAddresses) {
        if (!contractAddresses[chainId]["MarketAuction"].includes(auction.address)) {
            contractAddresses[chainId]["MarketAuction"].push(auction.address)
        }
    } else {
        contractAddresses[chainId] = { MarketAuction: [auction.address] }
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))

    const marketplace = await ethers.getContract("NftMarketplace")
    contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (chainId in contractAddresses) {
        if (!contractAddresses[chainId]["NftMarketplace"].includes(marketplace.address)) {
            contractAddresses[chainId]["NftMarketplace"].push(marketplace.address)
        }
    } else {
        contractAddresses[chainId] = { NftMarketplace: [marketplace.address] }
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))

    const tokens = await ethers.getContract("TokenRegistry")
    contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (chainId in contractAddresses) {
        if (!contractAddresses[chainId]["TokenRegistry"].includes(tokens.address)) {
            contractAddresses[chainId]["TokenRegistry"].push(tokens.address)
        }
    } else {
        contractAddresses[chainId] = { TokenRegistry: [tokens.address] }
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
}
module.exports.tags = ["all", "frontend"]
