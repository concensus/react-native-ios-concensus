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

const CreateAccountScreen = () => {

  function dismissKeyboardAndShowAccount() {
    Keyboard.dismiss();
    console.log("Keyboard dismissed, displaying account");
    //TODO: web3 call for getting account & private key
    
  }

  function onAuthenticatePress() {
    //TODO: Twilio API call goes here
    AlertIOS.prompt(
      "Enter verification code.",
      "Enter the SMS code that was just texted to you.",
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: dismissKeyboardAndShowAccount()},
      ]
    );
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
