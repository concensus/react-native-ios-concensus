import React from 'react';
import { Text, View } from 'react-native';
import { startCase } from 'lodash';
import AccountClient from '../lib/concensus-sdk/web3/account';
import ConcensusButton from '../components/ConcensusButton';
import Config from '../env';

// var Accounts = require('web3-eth-accounts');
// var accounts = new Accounts('http://localhost:8545');

const MainScreen = ({ navigation }) => {
    const accountClient = new AccountClient();

    function onProposeMotionPress() {
        navigation.navigate('NewPoll');
    }

    function onWeighInPress() {
        navigation.navigate('JoinPoll');
    }

    function onCreatePress() {
        navigation.navigate('CreateAccount');
    }

    function onSelectTestAccountPress() {
        const accounts = accountClient.getAccounts();
        navigation.navigate('SelectTestAccount', { accounts });
    }

    function renderAccountButton() {
        const style = {
            marginBottom: 100
        };

        if (Config.ACTIVE_ENV === 'development') {
          return (
            <ConcensusButton
              style={style}
              label="Select Test Account"
              underlayColor="#888"
              onPress={onSelectTestAccountPress}
            />
          );
        }

        const isAccountVerified = navigation.state && navigation.state.params && navigation.state.params.verified;
        if (isAccountVerified) {
            return <ConcensusButton style={style} label="Account Verified" underlayColor="#BBB" />;
        } else {
            return (
                <ConcensusButton style={style} label="Create An Account" underlayColor="#888" onPress={onCreatePress} />
            );
        }
    }

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 }}>
            {renderAccountButton()}
            <ConcensusButton
                label="Propose a Motion"
                underlayColor="#888"
                onPress={onProposeMotionPress}
            />
            <ConcensusButton label="Weigh In" underlayColor="#888" onPress={onWeighInPress} />
            <Text style={{ textAlign: 'center', marginTop: 200 }}>
                {startCase(Config.ACTIVE_ENV)} Mode
            </Text>
        </View>
    );
};
MainScreen.navigationOptions = ({ navigation }) => ({
    title: 'Concensus',
});

export default MainScreen;
