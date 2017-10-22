import React from 'react';
import {
  View,
} from 'react-native';
import ConcensusButton from '../components/ConcensusButton';

const MainScreen = ({ navigation }) => {
  function onProposeMotionPress() {
    navigation.navigate('NewPoll');
  }

  function onWeighInPress() {
    navigation.navigate('JoinPoll');
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
