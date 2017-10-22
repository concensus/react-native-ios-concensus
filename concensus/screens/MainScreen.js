import React from 'react';
import {
  View,
} from 'react-native';
import ConcensusButton from '../components/ConcensusButton';

// var Accounts = require('web3-eth-accounts');
// var accounts = new Accounts('http://localhost:8545');

const MainScreen = ({ navigation }) => {
  function onProposeMotionPress() {
    navigation.navigate('NewPoll');
  }

  function onWeighInPress() {
    navigation.navigate('JoinPoll');
  }

  function onCreatePress() {
    navigation.navigate('CreateAccount');
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 }}>
      <ConcensusButton
        label='Create An Account'
        underlayColor='#888'
        onPress={onCreatePress} />
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
