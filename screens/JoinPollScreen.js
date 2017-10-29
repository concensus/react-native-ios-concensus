import React from 'react';
import QrCodeScanner from '../components/QrCodeScanner';

function JoinPollScreen({ navigation }) {
    const poll = {
        id: 'poll1',
        subject: 'Boba',
        description: 'Should we get boba?',
        expiryInMinutes: 0.5,
        discussionExpiryInMinutes: 0.2,
    };

    function onBarCodeRead() {
        navigation.navigate('Poll', { poll });
    }

    return <QrCodeScanner onBarCodeRead={onBarCodeRead} />;
}

JoinPollScreen.navigationOptions = ({ navigation, subject }) => ({
    title: subject || 'Scan QR Code to Vote',
});

export default JoinPollScreen;
