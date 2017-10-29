import React from 'react';
import { View, ScrollView } from 'react-native';
import { Poll } from '../lib/concensus-sdk';
import ConcensusButton from '../components/ConcensusButton';
const t = require('tcomb-form-native');
const Form = t.form.Form;

const PollClient = new Poll();

const NewPollScreen = ({ navigation }) => {
    function onProposePress() {
        navigation.navigate('QRCodeShower');

        PollClient.create();
    }

    return (
        <View style={{ padding: 20 }}>
            <ScrollView>
                <Form type={PollType} />
            </ScrollView>
            <ConcensusButton label="Propose Motion" onPress={onProposePress} />
        </View>
    );
};

NewPollScreen.navigationOptions = ({ navigation }) => ({
    title: 'Propose a Motion',
});

export default NewPollScreen;

const PollType = t.struct({
    subject: t.String,
    proposal: t.String,
    endsInMinutes: t.Number,
    consensusPercentage: t.Number,
});
