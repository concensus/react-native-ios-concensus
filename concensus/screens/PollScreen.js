import React from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import ConcensusButton from '../components/ConcensusButton';
import DiscussionSection from '../components/DiscussionSection';

class PollScreen extends React.Component {
  onVotePress() {
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', padding: 20 }}>
        <ScrollView>
          <View style={{ paddingBottom: 20, marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#333', borderStyle: 'solid' }}>
            <Text>Participant View</Text>
          </View>
          <DiscussionSection
            pollID="poll-id"
            />
        </ScrollView>
        <ConcensusButton
          style={{}}
          label='Submit Vote'
          onPress={this.onVotePress}
        />
      </View>
    );
  }
}

PollScreen.navigationOptions = ({ navigation, subject }) => ({
  title: subject || 'Weigh In',
});

export default PollScreen;
