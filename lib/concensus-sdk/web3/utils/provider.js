// Use require instead of import because of weird read-only error
const Web3 = require('web3');

const TESTRPC_ADDRESS = 'http://localhost:8545';
// const TESTRPC_ADDRESS = 'http://172.20.10.2:8545';
// const ROPSTEN_ADDRESS = 'https://ropsten.infura.io/AbCJCEfsxCI94d5XdhMS';

// Initialize web3 and set the provider to the testRPC.
// set the provider you want from Web3.providers
const provider = provider ? provider : new Web3.providers.HttpProvider(TESTRPC_ADDRESS);
module.exports = provider;
