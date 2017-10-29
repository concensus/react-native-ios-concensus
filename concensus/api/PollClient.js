// Use require instead of import because of weird read-only error
var Web3 = require('web3');

import PollContract from '../solidityFiles/Poll.json';
import TruffleContract from 'truffle-contract';

//http;// + Wifi IP Address + 8545 while testRPC is running on console
// Open "network preferences:", wifi address is listed there
const TESTRPC_ADDRESS = 'http://172.20.10.2:8545';
// const TESTRPC_ADDRESS2 = 'http://localhost:8545';
// const ROPSTEN_ADDRESS = 'https://ropsten.infura.io/AbCJCEfsxCI94d5XdhMS';

const DEFAULT_GAS = 4000000;

let accounts;

class PollClient {
    constructor() {
        this._initWeb3();
        this._initContract();
        console.log('finished constructing poll client');
    }

    _loadAccounts(callback) {
        this.web3.eth.getAccounts(function(err, res) {
            if (!err) {
              console.log('ACCOUNTS FROM ETHCLIENT: ' + res);
              accounts = res;
              callback(res);
            }
        });
    }

    _initWeb3() {
    // Initialize web3 and set the provider to the testRPC.
    // set the provider you want from Web3.providers
        this.web3Provider = new Web3.providers.HttpProvider(TESTRPC_ADDRESS);
        this.web3 = new Web3(this.web3Provider);
        console.log(this.web3);
        console.log('ACCOUNTS: ' + this.web3.accounts);

        this._loadAccounts(function(accountsList) {
            console.log(accountsList);
        });
    }

    _initContract() {
        this.PollContract = TruffleContract(PollContract);
        this.PollContract.setProvider(this.web3Provider);
        console.log(this.PollContract);
    }

    createPoll(title, proposition, endTime, votesRequired, votesAllowed, msgSender) {
        console.log(
            `Create poll: ${title}, ${proposition}, ${endTime}, ${votesRequired}, ${votesAllowed}`
        );
        return this.PollContract
            .new(title, proposition, endTime, votesRequired, votesAllowed, {
                from: accounts[0],
                gas: DEFAULT_GAS,
            })
            .then(instance => {
                console.log('Instance Address: ' + instance.address);
                this._logPollInfo(instance.address);
                return instance.address;
            });
    }

    _logPollInfo(contractAddress) {
        return this.PollContract
            .at(contractAddress)
            ._title.call()
            .then(title => {
                console.log(title);
                return this.PollContract.at(contractAddress)._proposition.call();
            })
            .then(proposition => {
                console.log(proposition);
                return this.PollContract.at(contractAddress)._endTime.call();
            })
            .then(endTime => {
                console.log(endTime);
                return this.PollContract.at(contractAddress)._votesRequired.call();
            })
            .then(votesRequired => {
                console.log(votesRequired);
                return this.PollContract.at(contractAddress)._votesAllowed.call();
            })
            .then(votesAllowed => {
                console.log(votesAllowed);
            });
    }
}

export default new PollClient();
