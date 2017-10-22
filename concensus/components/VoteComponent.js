import React from 'react';
import {
  Button, 
	StyleSheet, 
	ScrollView, 
	Text, 
	Image,
	View 
} from 'react-native';
import { StackNavigator } from 'react-navigation'

  export default class VoteComponent extends React.Component {

    constructor(props) {
     super(props);
    /*
    */
    console.log(this.props.numVotes);
  }

  onPressMeh(event) {
    console.log("Voting meh!")
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */

    let radioGroupData = [{label:`Yes! I fully endorse this proposition.`, value:`1`},
    {label:`I'm okay with this, but would like more time for discussion for it to better meet my needs.`, value:`2`},
    {label:`No! This counteracts my needs.`, value:`3`}]

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    const { navigate } = this.props;

    return (
    	<View>
        <Button
          onPress={() => navigate('PollResults')}
          title={"Yes! I fully endorse this proposition."}
        />
        <Button
          onPress={this.onPressMeh}
          title={"I'm okay with this, but would like more time for discussion for it to better meet my needs."}
        />
        <Button
          onPress={() => navigate('PollResults')}
          title={"No! This counteracts my needs."}
        />
      </View>
      );
  }
}
