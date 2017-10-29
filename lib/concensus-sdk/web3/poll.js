import Config from '../../../env';
import TruffleContract from 'truffle-contract';
import PollContract from '../abi/Poll.json';
const provider = require('./utils/provider');
import AccountClient from './account';

class PollClient {
  constructor() {
    this.Account = new AccountClient();
    this.provider = provider;
    this._initContract();
    console.log('finished constructing poll client');
  }

  _initContract() {
    this.PollContract = TruffleContract(PollContract);
    this.PollContract.setProvider(this.provider);
  }

  create({ title, proposition, endTime, votesRequired, votesAllowed, msgSender }) {
    console.log(
      `Create poll: ${title}, ${proposition}, ${endTime}, ${votesRequired}, ${votesAllowed}`
    );
    const selectedAccount = this.Account.getAccounts()[0];
    return this.PollContract
      .new(title, proposition, endTime, votesRequired, votesAllowed, {
        from: selectedAccount,
        gas: Config.DEFAULT_GAS || 4000000,
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
