const { network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const WETH_ADDRESS_GOERLI = "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6"
    const TST_ADDRESS_GOERLI = "0x7af963cf6d228e564e2a0aa0ddbf06210b38615d"
    const USDT_ADDRESS_GOERLI = "0x56705db9f87c8a930ec87da0d458e00a657fccb0"
    const DAI_ADDRESS_GOERLI = "0xdc31ee1784292379fbb2964b3b9c4124d8f89c60"

    const tokenRegistry = await ethers.getContract("TokenRegistry", deployer)

    // const addWETHTx = await tokenRegistry.add(WETH_ADDRESS_GOERLI, "WETH")
    // await addWETHTx.wait(1)
    // console.log(`WETH token added to contract`)

    // const addTSTTx = await tokenRegistry.add(TST_ADDRESS_GOERLI, "TST")
    // await addTSTTx.wait(1)
    // console.log(`TST token added to contract`)

    // const addUSDTTx = await tokenRegistry.add(USDT_ADDRESS_GOERLI, "USDT")
    // await addUSDTTx.wait(1)
    // console.log(`USDT token added to contract`)

    // const addDAITx = await tokenRegistry.add(DAI_ADDRESS_GOERLI, "DAI")
    // await addDAITx.wait(1)
    // console.log(`DAI token added to contract`)
}
module.exports.tags = ["all", "addTokens"]
