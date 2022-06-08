import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from 'walletlink';

let account = null;
let INFURA_ID = "1ab9372ed24a4e65b940e6aab8624f55";
const providerOptions = {
  binancechainwallet: {
    package: true,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: INFURA_ID,
    },
  },
  walletlink: {
    package: WalletLink,
    options: {
      appName: "Fishing-games",
      infuraId: INFURA_ID,
      rpc: "",
      chainId: 4,
      appLogoUrl: null,
      darkMode: true,
    },
  },
};

const web3Modal = new Web3Modal({
  network: "rinkeby",
  theme: "light",
  cacheProvider: true,
  providerOptions,
});

async function connectWallet() {
  try {
    let provider = await web3Modal.connect();
    let web3 = new Web3(provider);
    await provider.send("eth_requestAccounts");
    let accounts = await web3.eth.getAccounts();
    account = accounts[0];

    console.log(account);
  } catch (error) {
    console.log(error);
  }
}

export default connectWallet;
