import React from 'react';
import QrCodeScanner from '../components/QrCodeScanner';

function JoinPollScreen({ navigation }) {
  function onBarCodeRead() {
    navigation.navigate('Poll');
  }

  return (
    <QrCodeScanner
      onBarCodeRead={onBarCodeRead}
    />
  );
}

JoinPollScreen.navigationOptions = ({ navigation, subject }) => ({
  title: subject || 'Scan QR Code to Vote',
});

export default JoinPollScreen;