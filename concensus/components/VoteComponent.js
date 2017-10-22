import React from 'react';
import {
  Text,
	View
} from 'react-native';
import ConcensusButton from './ConcensusButton'

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

    let radioGroupData = [
      {label:`Yes! I fully endorse this proposition.`, value:`1`},
      {label:`I'm okay with this, but would like more time for discussion for it to better meet my needs.`, value:`2`},
      {label:`No! This counteracts my needs.`, value:`3`}
    ];

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    const { navigate, style = {} } = this.props;

    return (
    	<View style={{...style}}>
        <ConcensusButton
          style={{backgroundColor: '#31823d'}}
          onPress={() => navigate('PollResults')}
          label={"Yes"}
        />
        <Text style={{ color: '#666', textAlign: 'center'}}>I fully endorse this proposition.</Text>

        <ConcensusButton
          style={{marginTop: 20, backgroundColor: '#888'}}
          onPress={this.onPressMeh}
          label={"Meh"}
        />
        <Text style={{ color: '#666', textAlign: 'center'}}>I'm okay with this, but would like more time for discussion for it to better meet my needs.</Text>

        <ConcensusButton
          style={{marginTop: 20, backgroundColor: '#aa2517'}}
          onPress={() => navigate('PollResults')}
          label={"No"}
        />
        <Text style={{ color: '#666', textAlign: 'center'}}>This counteracts my needs.</Text>
      </View>
      );
  }
}
