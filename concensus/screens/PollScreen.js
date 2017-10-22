import React from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View
} from 'react-native';
import PollComponent from '../components/PollComponent.js'
import VoteComponent from '../components/VoteComponent.js'
import DiscussionSection from '../components/DiscussionSection.js'

function msToTime(s) {
  let secs = s % 60;
  s = (s - secs) / 60;
  let mins = s % 60;
  let hrs = (s - mins) / 60;

  return hrs + ':' + mins + ':' + secs;
}

class PollScreen extends React.Component {

  constructor(props) {
    super(props);

    const poll = this.props.navigation.state.params.poll;
    const {
      id,
      subject,
      description,
      expiryInMinutes,
      discussionExpiryInMinutes,
    } = poll || {};

    console.log('expiryInMinutes', poll.expiryInMinutes);
    this.state = {
      timeRemaining: poll.expiryInMinutes * 60,
      discussionExpiry: poll.discussionExpiryInMinutes * 60,
      subject: poll.subject,
      description:
      poll.description,
      id: poll.id,
      meh: false
    };

  }

  componentDidMount() {
    setInterval(() => {
      this.setState(previousState => {
        console.log('previousState', previousState.timeRemaining);
        if (previousState.timeRemaining < 1) {
          axios.delete("http://8fcefb12.ngrok.io/votes")
        }
        return {timeRemaining: previousState.timeRemaining - 1}
      });
    }, 1000);
  }

  startDiscussionTimer() {
    console.log('Starting discussion timer');
    // debug this
    this.setState(() => {
      return {meh: true}
    })
    clearInterval();
    setInterval(() => {
      this.setState(previousState => {
        return {
          discussionExpiry: previousState.discussionExpiry - 1
        }
      })
    }, 1000);
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */

    const navigate = this.props.navigation.navigate;

    let {height, width} = Dimensions.get('window');
    height = height - 40;

    let styles = StyleSheet.create({
      contentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      view: {
        height: height,
        padding: 20
      },
      scrollContainer: {
        height: height
      },
      text1: {
        fontFamily: 'Baskerville',
        fontSize: 20
      },
      text2: {
        fontFamily: 'Baskerville',
        fontSize: 12
      }
      });

    let timeString = msToTime(this.state.timeRemaining);
    let discussionTimeString = msToTime(this.state.discussionExpiry);
    let discussionTimer = null;
    if (this.state.meh) {
      discussionTimer = (<Text style={styles.text2}>Time remaining in current poll: {discussionTimeString}</Text>);
    }

    return (
      <View style={styles.scrollContainer}>
        <ScrollView horizontal={false}
        pagingEnabled={true}>
          <View style={styles.view}>
            <Text style={styles.text1}>Time remaining: {timeString}</Text>
            <View style={{height: 10}}></View>
            <PollComponent
              numVotes={3}
              title={this.state.subject}
              description={this.state.description}></PollComponent>
            <VoteComponent
              style={{ marginTop: 40 }}
              navigate={navigate}
              startTimer={this.startDiscussionTimer.bind(this)}
            >
            </VoteComponent>
          </View>
          <View style={styles.view}>
            <Text style={styles.text2}>Time remaining in current poll: {timeString}</Text>
            {discussionTimer}
            <DiscussionSection
              pollID={this.state.id}
              showEntry={this.state.meh}></DiscussionSection>
          </View>
        </ScrollView>
      </View>
      );
  }
}

PollScreen.navigationOptions = ({ navigation, subject }) => ({
  title: subject || 'Weigh In',
});

export default PollScreen;
