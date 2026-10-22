import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
networks: {
  // 🔥 LOCAL GANACHE (USE THIS NOW)
  ganache: {
    url: "http://127.0.0.1:7545",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    chainId: 1337, // or 5777 depending on Ganache
  },

  // (Optional) keep amoy for later
  amoy: {
    url: process.env.AMOY_RPC_URL ?? "https://rpc-amoy.polygon.technology",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    chainId: 80002,
  },
}
}

export default config;
