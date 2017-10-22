import React from 'react';
import {
  Text,
	View
} from 'react-native';
import ConcensusButton from './ConcensusButton'
import { Fingerprint } from "expo";

export const VOTE_ENUM = {
  YES: 0,
  NO: 1,
  MAYBE: 2
};

export default class VoteComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.numVotes);
  }


  async onPressButton(vote, navigate) {
    const response = await Fingerprint.authenticateAsync("Authorize Your Vote");

    if (response.success) {
      // TODO: (rcheung) - Send firebase request to persist selection
      console.log("Authenticated: " + response.success + ", vote: " + vote);

      // TODO: (rcheung) - Navigate to PollResults upon expiry
      // navigate('PollResults')
    }
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */

    let radioGroupData = [
      {label:`Yes! I fully endorse this proposition.`, value: VOTE_ENUM.YES},
      {label:`I'm okay with this, but would like more time for discussion for it to better meet my needs.`, value: VOTE_ENUM.MAYBE},
      {label:`No! This counteracts my needs.`, value: VOTE_ENUM.NO}
    ];

    const { navigate, style = {} } = this.props;

    return (
    	<View style={{...style}}>
        <ConcensusButton
          style={{backgroundColor: '#31823d'}}
          onPress={() => this.onPressButton(VOTE_ENUM.YES, navigate)}
          label={"Yes"}
        />
        <Text style={{ color: '#666', textAlign: 'center'}}>{radioGroupData[0]}</Text>

        <ConcensusButton
          style={{marginTop: 20, backgroundColor: '#888'}}
          onPress={() => this.onPressButton(VOTE_ENUM.NO, navigate)}
          label={"Meh"}
        />
        <Text style={{ color: '#666', textAlign: 'center'}}>{radioGroupData[1]}</Text>

        <ConcensusButton
          style={{marginTop: 20, backgroundColor: '#aa2517'}}
          onPress={() => this.onPressButton(VOTE_ENUM.MAYBE, navigate)}
          label={"No"}
        />
        <Text style={{ color: '#666', textAlign: 'center'}}>{radioGroupData[2]}</Text>
      </View>
      );
  }
}
