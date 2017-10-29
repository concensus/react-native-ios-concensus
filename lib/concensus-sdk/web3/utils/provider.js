// Use require instead of import because of weird read-only error
const Web3 = require('web3');
import Config from '../../../../env';

const TESTRPC_ADDRESS = Config.TESTRPC_ADDRESS; // http://<YOUR_LOCAL_IP>:8545
console.log('TESTRPC_ADDRESS', TESTRPC_ADDRESS);
// const ROPSTEN_ADDRESS = 'https://ropsten.infura.io/AbCJCEfsxCI94d5XdhMS';

// Initialize web3 and set the provider to the testRPC.
// set the provider you want from Web3.providers
const provider = provider ? provider : new Web3.providers.HttpProvider(TESTRPC_ADDRESS);
module.exports = provider;
