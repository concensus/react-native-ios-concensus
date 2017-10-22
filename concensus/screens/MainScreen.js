import React from 'react';
import {
    Button,
    ScrollView,
} from 'react-native';

const MainScreen = ({ navigation }) => {
  const onProposeMotionPress = ()  => {
    navigation.navigate('NewPoll', { title: 'Propose a Motion' });
  };

  return (
    <ScrollView styles={{ padding: 20 }}>
      <Button
        style={styles.button}
        title="Propose a Motion"
        onPress={onProposeMotionPress}
      />
    </ScrollView>
  );
};
MainScreen.navigationOptions = ({ navigation }) => ({
  title: 'Concensus',
});

export default MainScreen;

const styles = {
  button: {
    fontFamily: 'Baskerville',
    fontSize: '30px'
  }
};
