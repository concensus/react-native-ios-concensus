import React from 'react';
import {
  View,
} from 'react-native';
import ConcensusButton from '../components/ConcensusButton';

const MainScreen = ({ navigation }) => {
  const onProposeMotionPress = ()  => {
    navigation.navigate('NewPoll', { title: 'Propose a Motion' });
  };

  return (
    <View style={{ padding: 20 }}>
      <ConcensusButton
        label='Propose a Motion'
        underlayColor='#888'
        onPress={onProposeMotionPress} />
    </View>
  );
};
MainScreen.navigationOptions = ({ navigation }) => ({
  title: 'Concensus',
});

export default MainScreen;
