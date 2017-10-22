import React from 'react';
import {
    ScrollView,
} from 'react-native';
const t = require('tcomb-form-native');
const Form = t.form.Form;

const NewPollScreen = () => {
    return (
        <ScrollView style={{ padding: 20 }}>
            <Form style={styles.baseFont} type={Poll}/>
        </ScrollView>
    );
};

NewPollScreen.navigationOptions = ({ navigation }) => ({
  title: 'Propose a Motion',
});

export default NewPollScreen;

const Conditions = t.enums({
  MAJORITY: 'Majority',
  ALL_IN: 'All-in (100% Consensus)'
});

const Poll = t.struct({
  title: t.String,
  summary: t.String,
  deadline: t.Date,
  conditions: Conditions,
});

const baseFont = {
  fontFamily: 'Baskerville',
};

const styles = {
    baseFont,
    header: {
      ...baseFont,
      fontSize: 30,
    }
};
