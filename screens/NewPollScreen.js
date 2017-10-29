import React from 'react';
import { View, ScrollView } from 'react-native';
import ConcensusButton from '../components/ConcensusButton';
import axios from 'axios';
const t = require('tcomb-form-native');
const Form = t.form.Form;

const NewPollScreen = ({ navigation }) => {
    function onProposePress() {
        navigation.navigate('QRCodeShower');

        axios.post('http://4d23f078.ngrok.io/createPoll');
    }

    return (
        <View style={{ padding: 20 }}>
            <ScrollView>
                <Form type={Poll} />
            </ScrollView>
            <ConcensusButton label="Propose Motion" onPress={onProposePress} />
        </View>
    );
};

NewPollScreen.navigationOptions = ({ navigation }) => ({
    title: 'Propose a Motion',
});

export default NewPollScreen;

const Poll = t.struct({
    subject: t.String,
    proposal: t.String,
    endsInMinutes: t.Number,
    consensusPercentage: t.Number,
});
