import React from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import DiscussionSection from '../components/DiscussionSection';

class PollScreen extends React.Component {
  onVotePress() {
  }

  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <View style={{ paddingBottom: 20, marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#333', borderStyle: 'solid' }}>
          <Text>Participant View</Text>
        </View>
        <DiscussionSection
          pollID="poll-id"
        />
      </ScrollView>
    );
  }
}

PollScreen.navigationOptions = ({ navigation, subject }) => ({
  title: subject || 'Weigh In',
});

export default PollScreen;
