import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import DiscussionPost from './DiscussionPost';
import {firebase, newComment} from "../api/firebase"
import ConcensusButton from './ConcensusButton';

export default class DiscussionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discussions: [],
      keyboardOpen: false
    };
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  componentDidMount(){
    this.getDiscussion();
  }

  _keyboardDidShow () {
    this.setState({ keyboardOpen: true });
  }

  _keyboardDidHide () {
    this.setState({ keyboardOpen: false });
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

  renderComments({ readOnly }) {
    if (this.state.discussions.length == 0) {
      return (
        <KeyboardAvoidingView behavior="padding">
          <Text>No Comments</Text>
          { !readOnly && <DiscussionInput style={{ flexBasis: '10%' }} {...this.props} /> }
          { !readOnly && <View style={{ height: this.state.keyboardOpen ? 100 : 0 }} /> }
        </KeyboardAvoidingView>
      );
    } else {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
          <ListView
            style={{ flexBasis: this.state.keyboardOpen ? '20%' : '80%' }}
            dataSource={ds.cloneWithRows(this.state.discussions)}
            renderRow={(post) => <DiscussionPost post={post} />}
          />
          { !readOnly && <DiscussionInput style={{ flexBasis: '10%' }} {...this.props} /> }
        </KeyboardAvoidingView>
      );
    }
  }

  render() {
    const { readOnly } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Discourse</Text>
        {this.renderComments({ readOnly })}
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

class DiscussionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onPostPress() {
    if (this.state.text === '') {
      return;
    }

    newComment(this.props.pollID, {
      author: this.props.userID || 'Anonymous',
      body: this.state.text
    });

    this.setState({
      text: ''
    });
  }

  render() {
    const inputHeight = 40;
    return (
      <View style={{
        ...this.props.style,
        flex: 1,
        height: inputHeight,
        marginTop: 10,
        flexDirection: 'row',
        borderColor: '#AAA',
        borderTopWidth: 1,
        paddingTop: 15
      }}>
        <TextInput
          style={{
            flex: 1,
            height: inputHeight,
            padding: 3,
            borderColor: 'gray',
            backgroundColor: '#FFF',
            borderWidth: 1
          }}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.onPostPress.bind(this)}
          returnKeyLabel="send"
          value={this.state.text}
        />
      </View>
    );
  }
}
