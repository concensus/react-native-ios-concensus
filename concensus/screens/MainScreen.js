import React from 'react';
import {
  View,
} from 'react-native';
import ConcensusButton from '../components/ConcensusButton';

import { Fingerprint } from "expo";

const MainScreen = ({ navigation }) => {
  function onProposeMotionPress() {
    navigation.navigate('NewPoll');
  }

  function onWeighInPress() {
    navigation.navigate('JoinPoll');
  }

  async function onAuthorizePress() {
    try {
      const response = await Fingerprint.authenticateAsync("Authorize Your Vote");
      console.log("Authenticated: " + response.success);
      // do something with response
    } catch(error) {
      // do something with error
    }

  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 }}>
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
