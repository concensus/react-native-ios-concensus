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
import {firebase, newComment} from "../api/firebase"
import ConcensusButton from './ConcensusButton';

export default class DiscussionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discussions: []
    };
  }
  componentDidMount(){
    this.getDiscussion();
  }
  getDiscussion(){
    var id = this.props.pollID;
    let discussionRef = firebase.database().ref(`polls/${id}/discussions`);
    discussionRef.on("value", (snapshot)=>{
      var discussionsSlice = [];
      snapshot.forEach(child => {
        discussionsSlice.push({
          ...child.val(),
        })
      });

      this.setState({ discussions: discussionsSlice })
    })
  }
  renderComments() {
    if (this.state.discussions.length == 0) {
      return (
        <Text>No Comments</Text>
      );
    } else {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <ScrollView style={{ flexGrow: 1 }}>
            <ListView
              dataSource={ds.cloneWithRows(this.state.discussions)}
              renderRow={(post) => <DiscussionPost post={post} />}
            />
          </ScrollView>
          <View style={{ flex: 1, marginTop: 10, flexDirection: 'row', borderColor: '#CCC', borderTopWidth: 1, paddingTop: 15 }}>
            <TextInput
              style={{ flex: 1, height: 40, padding: 3, borderColor: 'gray', backgroundColor: '#FFF', borderWidth: 1 }}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <ConcensusButton
              style={{ flex: 1, fontSize: 13, marginLeft: 7, marginTop: 0, marginBottom: 0 }}
              label='Post'
              onPress={() => {
                newComment(this.props.pollID, {
                  author: this.props.userID || "andy",
                  body: this.state.text
                })
                this.setState({
                  text: ""
                })
              }
              }
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
