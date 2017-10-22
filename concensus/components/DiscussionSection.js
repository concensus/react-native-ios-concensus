import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView
} from 'react-native';
import DiscussionPost from './DiscussionPost';
import ConcensusButton from './ConcensusButton';
import {firebase, isEmpty} from "../api/firebase"

export default class DiscussionSection extends Component {
  constructor(props) {
    super(props);
    var id = this.props.pollID;
    // console.log('pollID',id);
    firebase.database().ref('polls/'+id).on('value', (snapshot) => {
      console.log('snapshot',snapshot.discussions);
      // console.log("New high score: ",JSON.stringify(snapshot.polls[pollID]));
      // firebase.database().ref('polls/'+id).set({
      //   discussions: [{
      //     author: "andy",
      //     content: "this is content"
      //   }]
      // });
    });

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      discussions: ds.cloneWithRows([
        {
          author: "andy",
          body: 'Have we considered the preferred banana ripeness?'
        },
        {
          author: "andya",
          body: 'But which day of the week should the bananas be delivered?'
        }
      ]),
    };
  }
  renderComments() {
    if (this.state.discussions.length == 0) {
      return (
        <Text>No Comments</Text>
      );
    } else {
      const inputHeight = 40;
      return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <ScrollView style={{ flexGrow: 1 }}>
            <ListView
              dataSource={this.state.discussions}
              renderRow={(post) => <DiscussionPost post={post} />}
            />
          </ScrollView>
          <View style={{ flex: 1, height: inputHeight, marginTop: 10, flexDirection: 'row', borderColor: '#CCC', borderTopWidth: 1, paddingTop: 15 }}>
            <TextInput
              style={{ flex: 1, height: inputHeight, padding: 3, borderColor: 'gray', backgroundColor: '#FFF', borderWidth: 1 }}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <ConcensusButton
              style={{ height: inputHeight, fontSize: 17, marginLeft: 7, marginTop: 0, marginBottom: 0 }}
              label='Post'
              onPress={() => {}}
            />
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Discourse</Text>
        {this.renderComments()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 25,
    fontFamily: 'Baskerville',
    marginBottom: 10
  }
});
