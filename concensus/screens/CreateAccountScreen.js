import React from 'react';
import {
  View,
  ScrollView,
  AlertIOS,
  Keyboard
} from 'react-native';
import ConcensusButton from '../components/ConcensusButton';
const t = require('tcomb-form-native');
const Form = t.form.Form;
const axios = require('axios')

const CreateAccountScreen = ({ navigation }) => {

  function onAuthenticatePress() {
    //TODO: Twilio API call goes here
    console.log(Poll.enterName)
    axios.post(`https://8fcefb12.ngrok.io/send/${Poll.enterPhoneNumber}@${Poll.enterName}`).then(res=>{
        AlertIOS.prompt(
          "Enter verification code.",
          "Enter the SMS code that was just texted to you.",
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Verify', onPress: () => {
              navigation.navigate('Home', {verified: true});
              Keyboard.dismiss();
            }},
          ]
        )
    }).catch(console.log)

  }

  return (
    <View style={{ padding: 20 }}>
      <ScrollView>
        <Form type={Poll}/>
      </ScrollView>
      <ConcensusButton
        label='Authenticate Via SMS'
        onPress={onAuthenticatePress}
      />
    </View>
  );
};

CreateAccountScreen.navigationOptions = ({ navigation }) => ({
  title: 'Create An Account',
});

export default CreateAccountScreen;

const Poll = t.struct({
  enterName: t.String,
  enterPhoneNumber: t.Number
});
