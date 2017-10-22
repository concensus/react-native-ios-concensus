import React from 'react';
import axios from 'axios';
import {
  Text,
	View
} from 'react-native';
import ConcensusButton from './ConcensusButton'
import { Fingerprint } from "expo";
import { updateUserVote } from '../api/firebase';

export const VOTE_ENUM = {
  YES: 0,
  MAYBE: 1,
  NO: 2,
};

export default class VoteComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.numVotes);
  }


  async onPressButton(vote, navigate) {
    const userID = 'Andy';
    const response = await Fingerprint.authenticateAsync("Authorize Your Vote");

      if (response.success){
          // navigate('PollResults')
          updateUserVote(userID, vote);
          if (vote === VOTE_ENUM.MAYBE) {
              this.props.startTimer();
          }
      //Checkmark animation here
      axios.post("https://8fcefb12.ngrok.io/", {
        voteType: vote,
        account: "0x267042459ba40cd52ff2711bb6c95963f4b76da6"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
        <Text style={{ color: '#666', textAlign: 'center'}}>{radioGroupData[0].label}</Text>

        <ConcensusButton
          style={{marginTop: 20, backgroundColor: '#888'}}
          onPress={() => this.onPressButton(VOTE_ENUM.MAYBE, navigate)}
          label={"Meh"}
        />
        <Text style={{ color: '#666', textAlign: 'center'}}>{radioGroupData[1].label}</Text>

        <ConcensusButton
          style={{marginTop: 20, backgroundColor: '#aa2517'}}
          onPress={() => this.onPressButton(VOTE_ENUM.NO, navigate)}
          label={"No"}
        />
        <Text style={{ color: '#666', textAlign: 'center'}}>{radioGroupData[2].label}</Text>
      </View>
      );
  }
}
