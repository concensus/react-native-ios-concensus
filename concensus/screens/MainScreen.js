// import '../shim.js';

import React from 'react';
import {
  Linking,
  View,
} from 'react-native';
import ConcensusButton from '../components/ConcensusButton';
const UportConnect = require('../src/vendor/uport-connect.js');

// var Accounts = require('web3-eth-accounts');
// var accounts = new Accounts('http://localhost:8545');

const Connect = UportConnect.ConnectCore;
const SimpleSigner = UportConnect.SimpleSigner;

const rpcUrl = 'https://rinkeby.infura.io/TN4nYidPt24zcMvOVYIE';

import URL from 'url-parse';
import qs from 'qs';

const uriHandler = (url) => {
  console.log(url)
  Linking.openURL(url)
};

export const uport = new Connect('Concensus', {
  clientId: '2ovAaNnMqFLXgi21xz5LgkgRCUCiBUg7KCG',
  network: 'rinkeby',
  signer: SimpleSigner('501a39a961440cc8b5f6842ded01c9d4a09b09a69cb46000393473c4e9f00203'),
  mobileUrlHandler: uriHandler,
  uriHandler: uriHandler,
  rpcUrl
});

function makeId(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

uport.topicFactory = (name) => {
  const id = makeId(10);
  const path = `/uport/${id}`;
  const url = `APPURLSCHEMA:${path}`; // You need to set this up in xcode. See https://facebook.github.io/react-native/docs/linking.html
  let handler;
  let cancel;
  const topic = new Promise((resolve, reject) => {
    handler = (event) => {
      if (event.url) {
        const url = URL(event.url, true);
        if (url.pathname === path) {
          if (url.hash) {
            const params = qs.parse(url.hash.slice(1));
            Linking.removeEventListener('url', handler);
            resolve(params[name]);
          } else {
            console.log('no hash');
            reject();
          }
        } else {
          console.log('ignoring request');
        }
      }
    }

    Linking.addEventListener('url', handler);

    cancel = () => {
      Linking.removeEventListener('url', handler);
      resolve();
    }
  });
  topic.url = url;
  topic.cancel = cancel;
  return topic;
};

const MainScreen = ({ navigation }) => {
  function authenticateWithUport() {
    uport.requestCredentials({
      requested: ['name', 'avatar', 'phone', 'country'],
      notify: true
    }).then(profile => {
      console.log(profile);
    });
  };

  function onProposeMotionPress() {
    navigation.navigate('NewPoll');
  }

  function onWeighInPress() {
    navigation.navigate('JoinPoll');
  }

  function onCreatePress() {
    navigation.navigate('CreateAccount');
  }

  function renderAccountButton() {
    if (navigation.state&&navigation.state.params&&navigation.state.params.verified) {
      return(
        <ConcensusButton
          label='Account Verified'
          underlayColor='#888' />
      )
    } else {
      return (
        <ConcensusButton
          label='Create An Account'
          underlayColor='#888'
          onPress={onCreatePress} />
      )
    }
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 }}>
      <ConcensusButton label="Login" onPress={authenticateWithUport} />
      {renderAccountButton()}
      <ConcensusButton
        label='Propose a Motion'
        underlayColor='#888'
        onPress={onProposeMotionPress} />
      <ConcensusButton
        label='Weigh In'
        underlayColor='#888'
        onPress={onWeighInPress} />
    </View>
  );
};

MainScreen.navigationOptions = ({ navigation }) => ({
  title: 'Concensus',
});

export default MainScreen;
