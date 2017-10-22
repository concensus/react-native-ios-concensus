import React from 'react';
import QrCodeScanner from '../components/QrCodeScanner';

function JoinPollScreen({ navigation }) {
  const poll = {
    id: 'poll1',
    subject: "Should we get bagels?",
    description: "The sleepy hackers are probably not going to want to eat leftover pasta for breakfast tomorrow. Also, we should have a food that slows the release of insulin coursing through their body after all the Red Bull, fruits, and other sugary snacks we left for them overnight. I propose a motion to have bagels delivered to fulfill this need.",
    expiryInMinutes: 60,
    discussionExpiryInMinutes: 5,
  };

  function onBarCodeRead() {
    navigation.navigate('Poll', { poll });
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