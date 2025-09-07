require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20",
  networks: {
    somnia: {
      url: "https://rpc-testnet.somnia.network",
      accounts: ["YOUR_PRIVATE_KEY_HERE"]
    }
  }
};
