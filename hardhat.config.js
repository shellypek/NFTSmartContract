require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/CLPb4Jt4vaBnPWNiEzVBJx-9godNIIsC`,
      accounts: ["23a0d5efcc354eb4a727afeecda5926a4eccbae20fde89bd083c1a00ccf00553"]
    }
  }
};
