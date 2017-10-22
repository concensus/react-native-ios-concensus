import React from 'react';
import {
	StyleSheet,
	ScrollView,
	Text,
	Image,
	View
} from 'react-native';

export default class PollComponent extends React.Component {
  // static navigationOptions = {
  //   title: 'app.json',
  // };

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

    return (
    	// <Text>Hello world!</Text>
    	<Image source={pic} style={{width: 193, height: 110}}/>
    	);
  }
}
