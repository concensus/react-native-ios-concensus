import React from 'react';
import { 
	StyleSheet, 
	ScrollView, 
	Text, 
	Image,
	View,
  ProgressViewIOS,
} from 'react-native';
import Animation from 'lottie-react-native';
import PollBars from '../components/PollBars.js'

export default class PollResultsScreen extends React.Component {
<<<<<<< Updated upstream
=======

  componentDidMount() {
    this.animation.play();
  }
>>>>>>> Stashed changes

  constructor(props) {
  	super(props);
  	console.log(this.props.numVotes);
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

<<<<<<< Updated upstream
    let pic2 = <Image source={require('../images/indigo.png')}/> //progressImage={pic2}

    let progressValue = 0.5

    return (
      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <ProgressViewIOS progress={progressValue} 
        progressViewStyle={'default'}/>
=======
    let pollData = {'y': 0.75, 'n':0.25};

    return (
      <View style={{flex:1, alignItems:'center'}}>
        <Animation ref={animation => { this.animation = animation; }}
        style={{width:200, height:200}}
        source={require('../assets/images/pencil_write.json')}
        />
        <Text style={{fontFamily: 'Baskerville', fontSize: 30 }}>Should we get bagels?</Text>
        <View style={{height:30}}></View>
        <PollBars data={pollData}/>
>>>>>>> Stashed changes
      </View>
    	);
  }
}
