import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-web3";
import "@typechain/hardhat";
import "dotenv/config";
import "hardhat-deploy";
import "solidity-coverage";

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "";
const MNEMONIC = process.env.MNEMONIC;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEYS = PRIVATE_KEY ? [PRIVATE_KEY] : [];

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: MNEMONIC ? { mnemonic: MNEMONIC } : PRIVATE_KEYS,
      saveDeployments: true,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer.
    },
    feeCollector: {
      default: 1,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
    ],
  },
  mocha: {
    timeout: 100000,
  },
};
