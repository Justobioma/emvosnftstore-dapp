require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   solidity: "0.8.9",
  defaultNetwork: "local",
  networks: {
    hardhat: {
    },
    local: {
      url: "http://localhost:8545/",
      accounts: 'remote'
    },
  },

}
Crypto Devs Contract Address: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
