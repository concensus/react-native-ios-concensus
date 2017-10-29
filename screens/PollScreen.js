import React from 'react';
import axios from 'axios';
import { Dimensions, StyleSheet, ScrollView, Text, View } from 'react-native';
import PollComponent from '../components/PollComponent.js';
import VoteComponent, { VOTE_ENUM } from '../components/VoteComponent.js';
import DiscussionSection from '../components/DiscussionSection.js';
import { getUserVote } from '../api/firebase';

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
        // const { id, subject, description, expiryInMinutes, discussionExpiryInMinutes } = poll || {};

        console.log('expiryInMinutes', poll.expiryInMinutes);
        this.state = {
            vote: null,
            interval: null,
            timeRemaining: poll.expiryInMinutes * 60,
            discussionExpiry: poll.discussionExpiryInMinutes * 60,
            subject: poll.subject,
            description: poll.description,
            id: poll.id,
            meh: false,
        };
    }

    componentWillMount() {
        const userID = 'Andy';

        const interval = setInterval(() => {
            getUserVote(userID).then(response => {
                if (response.val()) {
                    console.log('VOTE', response.val().option);
                    this.setState({ vote: response.val().option });
                }
            });
        }, 1000);

        this.setState({ interval });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(previousState => {
                console.log('previousState', previousState.timeRemaining);
                if (previousState.timeRemaining < 1) {
                    axios.delete('http://4d23f078.ngrok.io/votes');
                }
                return { timeRemaining: previousState.timeRemaining - 1 };
            });
        }, 1000);
    }

    startDiscussionTimer() {
        console.log('Starting discussion timer');
        // debug this
        this.setState(() => {
            return { meh: true };
        });
        clearInterval();
        setInterval(() => {
            this.setState(previousState => {
                return {
                    discussionExpiry: previousState.discussionExpiry - 1,
                };
            });
        }, 1000);
    }

    render() {
        // const userID = 'Andy';

        const navigate = this.props.navigation.navigate;

        let { height } = Dimensions.get('window');
        height = height - 40;

        let styles = StyleSheet.create({
            contentContainer: {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            },
            view: {
                height,
                padding: 20,
            },
            scrollContainer: {
                height,
            },
            text1: {
                fontFamily: 'Baskerville',
                fontSize: 20,
            },
            text2: {
                fontFamily: 'Baskerville',
                fontSize: 12,
            },
        });

        let timeString = msToTime(this.state.timeRemaining);
        let discussionTimeString = msToTime(this.state.discussionExpiry);
        let discussionTimer = null;
        if (this.state.meh) {
            discussionTimer = (
                <Text style={styles.text2}>Time remaining in current poll: {discussionTimeString}</Text>
            );
        }
        const readOnly = this.state.vote !== VOTE_ENUM.MAYBE;

        return (
            <View style={styles.scrollContainer}>
                <ScrollView horizontal={false} pagingEnabled>
                    <View style={styles.view}>
                        <Text style={styles.text1}>Time remaining: {timeString}</Text>
                        <View style={{ height: 10 }} />
                        <PollComponent
                            numVotes={3}
                            title={this.state.subject}
                            description={this.state.description}
                        />
                        <VoteComponent
                            style={{ marginTop: 40 }}
                            navigate={navigate}
                            startTimer={this.startDiscussionTimer.bind(this)}
                        />
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.text2}>Time remaining in current poll: {timeString}</Text>
                        {discussionTimer}
                        <DiscussionSection pollID={this.state.id} showEntry={!readOnly} />
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
