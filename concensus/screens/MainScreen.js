import React from 'react';
import {
    Button,
    View,
} from 'react-native';
import baseStyles from './shared/baseStyles';

const MainScreen = ({ navigation }) => {
  const onProposeMotionPress = ()  => {
    navigation.navigate('NewPoll', { title: 'Propose a Motion' });
  };

  return (
    <View style={{ padding: 20 }}>
      <Button
        style={styles.button}
        title="Propose a Motion"
        onPress={onProposeMotionPress}
      />
    </View>
  );
};
MainScreen.navigationOptions = ({ navigation }) => ({
  title: 'Concensus',
});

export default MainScreen;

const styles = {
  button: {
    ...baseStyles,
    fontSize: '30px',
    fontWeight: 'bold'
  }
};
