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

export default class ParticipantView extends React.Component {

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */

    const navigate = this.props.navigation.navigate

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    let {height, width} = Dimensions.get('window')
    console.log('height', height)

    let styles = StyleSheet.create({
      contentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'},
      view: {
        height: height},
      scrollContainer: {
        height: height
      }
    })

    return (
      <View style={styles.scrollContainer}>
      <ScrollView horizontal={false}
      pagingEnabled={true}>
        <View style={styles.view}>
          <PollComponent numVotes={3}
          title="Should we get bagels?"
          description="placeholder for discussion"></PollComponent>
          <Text>Hello world!</Text>
          <VoteComponent navigate={navigate}></VoteComponent>
        </View>
        <View style={styles.view}>
          <DiscussionSection pollID={"HI"}></DiscussionSection>
        </View> 
      </ScrollView>

      </View>
      );
  }
}
