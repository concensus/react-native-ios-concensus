import React from 'react';
import { 
	StyleSheet, 
	ScrollView, 
	Text, 
	Image,
	View,
  ProgressViewIOS,
} from 'react-native';

export default class PollResultsScreen extends React.Component {

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

    let pic2 = <Image source={require('../images/indigo.png')}/> //progressImage={pic2}

    let progressValue = 0.5

    return (
      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <ProgressViewIOS progress={progressValue} 
        progressViewStyle={'default'}/>
      </View>
    	);
  }
}
