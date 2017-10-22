import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView
} from 'react-native';
import DiscussionPost from './DiscussionPost';
import {firebase, newComment} from "../api/firebase"

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
      this.setState({ discussions: [] });
      var discussionsSlice = this.state.discussions.slice();
      snapshot.forEach(child => {
        discussionsSlice.push({
          ...child.val(),
        })
      });
      this.setState({ discussions: discussionsSlice })
    })
  }
  renderComments() {
    if(this.state.discussions.length > 0){
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return(
        <ListView
          style={{ paddingLeft: 7 }}
          dataSource={ds.cloneWithRows(this.state.discussions)}
          renderRow={(post) => <DiscussionPost post={post} />}
        />
      )
    }
    return <Text>No Comments</Text>
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
    fontFamily: 'Lato-Regular',
    marginBottom: 10
  }
});
