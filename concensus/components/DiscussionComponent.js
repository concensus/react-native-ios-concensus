import React from 'react';
import { 
	StyleSheet, 
	ScrollView, 
	Text, 
	Image,
	View 
} from 'react-native';

export default class DiscussionComponent extends React.Component {
  // static navigationOptions = {
  //   title: 'app.json',
  // };

  constructor(props) {
  	super(props);
    /*
    * discussionThreads
    */
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */

    return (
      <ScrollView>
        <Text>{this.props.threads}</Text> 
      </ScrollView>      
      );
  }
}
