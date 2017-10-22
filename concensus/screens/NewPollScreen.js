import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import ConcensusButton from '../components/ConcensusButton';
const t = require('tcomb-form-native');
const Form = t.form.Form;

const NewPollScreen = () => {
  function onProposePress() {
  }

  return (
    <View style={{ padding: 20 }}>
      <ScrollView>
        <Form type={Poll}/>
      </ScrollView>
      <ConcensusButton
        label='Propose Motion'
        onPress={onProposePress}
      />
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
