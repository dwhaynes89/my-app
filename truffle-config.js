const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    rinkeby: {
      provider: () =>
        new HDWalletProvider("5f8c6b4ef29d5e4ac3e63d48783b000989c0e5b479d41f21c71825779c6afc43", "https://rinkeby.infura.io/v3/1ef61bae2e414cef9c7c075b135cf2b6"),
      network_id: 4, // Rinkeby network ID
      gas: 5500000,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider("5f8c6b4ef29d5e4ac3e63d48783b000989c0e5b479d41f21c71825779c6afc43", "https://mainnet.infura.io/v3/1ef61bae2e414cef9c7c075b135cf2b6"),
      network_id: 1, // Ethereum mainnet
      gas: 5500000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Choose Solidity version
    },
  },
};
