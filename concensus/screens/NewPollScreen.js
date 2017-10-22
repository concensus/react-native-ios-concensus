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
        <Form style={styles.baseFont} type={Poll}/>
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

const Conditions = t.enums({
  MAJORITY: 'Majority',
  ALL_IN: 'All-in (100% Consensus)'
});

const Poll = t.struct({
  subject: t.String,
  proposal: t.String,
  endsInMinutes: t.Number,
  concensusPercentage: t.Number,
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
