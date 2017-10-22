import React from 'react';
import { 
  Animation,
	StyleSheet, 
	ScrollView, 
	Text, 
	Image,
	View 
} from 'react-native';
import FadeInView from './FadeInView.js'

export default class PollBars extends React.Component {

  constructor(props) {
  	super(props);

  	console.log('data', this.props.data);
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    let styles = StyleSheet.create({
      text: {fontFamily: 'Baskerville', fontSize: 20 },
    })

    return (
      <View style={{flex:1}}>
        <FadeInView answer={1} data={this.props.data['y']}/>
        <Text style={styles.text}>Yes: {this.props.data['y']*100}%</Text>
        <View style={{height:10}}></View>
        <FadeInView answer={0} data={this.props.data['n']}/>
        <Text style={styles.text}>No: {this.props.data['n']*100}%</Text>
      </View>
    	);
  }
}
