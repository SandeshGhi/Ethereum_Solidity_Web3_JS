import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  // We are in the Browser and MetaMask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are in the server or the user is not running metamask.
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/6e6351780d2641f895cfb2305bcd870a'
  );
  web3 = new Web3(provider);
}

export default web3;
