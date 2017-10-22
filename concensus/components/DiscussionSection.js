import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import DiscussionPost from './DiscussionPost';
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
      return (
        <View>
          <ScrollView>
            <ListView
              dataSource={this.state.discussions}
              renderRow={(post) => <DiscussionPost post={post} />}
            />
          </ScrollView>
          <View style={{flex: 1, flexDirection: 'row'}}>
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
