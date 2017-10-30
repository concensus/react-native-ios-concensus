import React from 'react';
import { View, ScrollView } from 'react-native';
import PollClient from '../lib/concensus-sdk/web3/poll';
import ConcensusButton from '../components/ConcensusButton';
const t = require('tcomb-form-native');
const Form = t.form.Form;

const Poll = new PollClient();
const VOTES_ALLOWED = 10;

class NewPollScreen extends React.Component {
  onProposePress() {
    const { navigation } = this.props;
    navigation.navigate('QRCodeShower');
    const formValues = this.refs.form.getValue();
    Poll.create({
      title: formValues.subject,
      proposition: formValues.proposal,
      endTime: formValues.endsInMinutes,
      votesRequired: (formValues.consensusPercentage / 100) * VOTES_ALLOWED,
      votesAllowed: VOTES_ALLOWED
    });
  }

  render() {
    return (
      <View style={{padding: 20}}>
        <ScrollView>
          <Form ref="form" type={PollType}/>
        </ScrollView>
        <ConcensusButton label="Propose Motion" onPress={this.onProposePress.bind(this)}/>
      </View>
    );
  }
}

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
