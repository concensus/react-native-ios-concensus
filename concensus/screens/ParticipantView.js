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
<<<<<<< HEAD
import DiscussionSection from '../components/DiscussionSection.js'
=======
import DiscussionComponent from '../components/DiscussionComponent.js'
>>>>>>> 2298c22... Progress

export default class ParticipantView extends React.Component {

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */

<<<<<<< HEAD
    const navigate = this.props.navigation.navigate

=======
>>>>>>> 2298c22... Progress
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
<<<<<<< HEAD
          <VoteComponent navigate={navigate}></VoteComponent>
        </View>
        <View style={styles.view}>
          <DiscussionSection pollID={"HI"}></DiscussionSection>
=======
          <VoteComponent></VoteComponent>
        </View>
        <View style={styles.view}>
          <DiscussionComponent threads={"Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg."}></DiscussionComponent>
>>>>>>> 2298c22... Progress
        </View> 
      </ScrollView>

      </View>
      );
  }
}
