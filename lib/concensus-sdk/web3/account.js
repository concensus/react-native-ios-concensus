const provider = require('./utils/provider');
const web3 = require('./utils/web3');

class AccountClient {
  constructor() {
    this.provider = null;
    this.web3 = null;
    this.accounts = [];

    this._initWeb3();
  }

  _initWeb3() {
    // Initialize web3 and set the provider to the testRPC.
    // set the provider you want from Web3.providers
    this.provider = provider;
    this.web3 = web3;
    this._loadAccounts(accountsList => console.log(accountsList));
  }

  _loadAccounts(callback) {
    this.web3.eth.getAccounts((err, res) => {
      if (!err) {
        this.accounts = res;
        callback(res);
      }
      throw (err);
    });
  }

  getAccounts() {
    return this.accounts;
  }
}

export default AccountClient;
