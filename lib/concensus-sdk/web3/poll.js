import TruffleContract from 'truffle-contract';

const provider = require('./utils/provider');
const web3 = require('./utils/web3');

import PollContract from '../abi/Poll.json';

const DEFAULT_GAS = 4000000;

class PollClient {
  constructor() {
    this.provider = null;
    this.web3 = null;
    this.accounts = [];

    this._initWeb3();
    this._initContract();
    console.log('finished constructing poll client');
  }

  _initWeb3() {
    // Initialize web3 and set the provider to the testRPC.
    // set the provider you want from Web3.providers
    this.provider = provider;
    this.web3 = web3;
    console.log(this.web3, this.provider);
    console.log('ACCOUNTS: ' + this.web3.accounts);

    this._loadAccounts(function(accountsList) {
      console.log(accountsList);
    });
  }

  _loadAccounts(callback) {
    this.web3.eth.getAccounts(function(err, res) {
      if (!err) {
        console.log('ACCOUNTS FROM ETHCLIENT: ' + res);
        this.accounts = res;
        callback(res);
      }
    });
  }

  _initContract() {
    this.PollContract = TruffleContract(PollContract);
    this.PollContract.setProvider(this.provider);
    console.log(this.PollContract);
  }

  createPoll(title, proposition, endTime, votesRequired, votesAllowed, msgSender) {
    console.log(
      `Create poll: ${title}, ${proposition}, ${endTime}, ${votesRequired}, ${votesAllowed}`
    );
    return this.PollContract
      .new(title, proposition, endTime, votesRequired, votesAllowed, {
        from: this.accounts[0],
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

export default PollClient;
