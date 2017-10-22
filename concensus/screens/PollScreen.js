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
      <ScrollView style={{ padding: 20, flex: 1, flexDirection: 'column' }}>
        <View style={{ paddingBottom: 20, marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#333', borderStyle: 'solid' }}>
          <Text>Participant View</Text>
        </View>
        <View style={{ flexGrow: 1 }}>
          <DiscussionSection
            pollID="poll-id"
          />
        </View>
      </ScrollView>
    );
  }
}

PollScreen.navigationOptions = ({ navigation, subject }) => ({
  title: subject || 'Weigh In',
});

export default PollScreen;
