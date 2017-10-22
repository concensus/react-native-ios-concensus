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
import VoteComponent, { VOTE_ENUM } from '../components/VoteComponent.js'
import DiscussionSection from '../components/DiscussionSection.js'

class PollScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: null
    };
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */

    const navigate = this.props.navigation.navigate;
    const poll = this.props.navigation.state.params.poll;
    const {
      id,
      subject,
      description,
      expiryInMinutes,
      discussionExpiryInMinutes,
    } = poll || {};

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    let {height, width} = Dimensions.get('window');
    height = height - 40;

    let styles = StyleSheet.create({
      contentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'},
      view: {
        height: height,
        padding: 20
      },
      scrollContainer: {
        height: height
      }
    });

    return (
      <View style={styles.scrollContainer}>
        <ScrollView horizontal={false}
                    pagingEnabled={true}>
          <View style={styles.view}>
            <PollComponent numVotes={3}
                           title={subject}
                           description={description}></PollComponent>
            <VoteComponent style={{ marginTop: 40 }}
                           navigate={navigate}>
            </VoteComponent>
          </View>
          <View style={styles.view}>
            <DiscussionSection pollID={id}
                               readOnly={this.state.vote !== VOTE_ENUM.MAYBE}/>
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
