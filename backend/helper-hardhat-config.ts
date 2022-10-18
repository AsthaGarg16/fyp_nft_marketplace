export interface networkConfigItem {
    name?: string
    subscriptionId?: string 
    keepersUpdateInterval?: string 
    raffleEntranceFee?: string 
    callbackGasLimit?: string 
    vrfCoordinatorV2?: string
    gasLane?: string 
    ethUsdPriceFeed?: string
    mintFee?: string
  }
  
export interface networkConfigInfo {
    [key: number]: networkConfigItem
}

export const networkConfig:networkConfigInfo = {
    1337: {
        name: "localhost",
        subscriptionId: "1007",
        ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
        callbackGasLimit: "500000",
        mintFee: "10000000000000000", 
    },
    5: {
        name: "goerli",
        subscriptionId: "1007",
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15", // 30 gwei // 0.1 ETH
        callbackGasLimit: "500000", // 500,000 gas
        mintFee: "10000000000000000",
        vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        ethUsdPriceFeed:"0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    1: {
        name: "mainnet",
        keepersUpdateInterval: "30",
    },
}

export const developmentChains = ["hardhat", "localhost"]
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6
const frontEndContractsFile = "../frontend/constants/contractAddresses.json"
const frontEndAbiFile = "../frontend/constants/abi.json"
const DECIMALS = "18"
const INITIAL_PRICE = "200000000000000000000"

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_PRICE,
}