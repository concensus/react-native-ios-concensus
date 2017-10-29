// Use require instead of import because of weird read-only error
const Web3 = require('web3');
const provider = require('./provider');

const web3 = web3 ? web3 : new Web3(provider);

module.exports = web3;
