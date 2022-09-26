const { ethers } = require('hardhat')

const networkConfig = {
    default: {
        name: "hardhat",
        interval: "30",
    },
    5: {
        name: 'goerli',
        vrfCoordinatorV2: '0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D',
        entranceFee: ethers.utils.parseEther('0.01'),
        gasLane: '0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15',
        subscriptionId: '1862',
        callbackGasLimit: '500000',
        interval: '30',
        mintFee: "10000000000000000", // 0.01 ETH,
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"
    },
    31337: {
        name: 'localhost',
        subscriptionId: '1862',
        entranceFee: ethers.utils.parseEther('0.01'),
        gasLane: '0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15',
        callbackGasLimit: '500000',
        interval: '30',
        mintFee: "10000000000000000", // 0.01 ETH
    },
}

const DECIMALS = "18"
const INITIAL_PRICE = "200000000000000000000"

const developmentChains = ['hardhat', 'localhost']

module.exports = {
    networkConfig,
    DECIMALS,
    INITIAL_PRICE,
    developmentChains,
}