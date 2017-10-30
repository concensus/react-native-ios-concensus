import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import ConcensusButton from '../components/ConcensusButton';
import accountClient from '../lib/concensus-sdk/web3/account';

const SelectTestAccountScreen = ({ navigation }) => {
    const { accounts } = navigation.state.params;

    function onAccountPress(selectedAccount) {
        // TODO: (rcheung) - Persist account selection
        accountClient.setAccount(selectedAccount);
    }

    function renderAccountButtons() {
        return accounts.map((account, idx) => (
            <ConcensusButton
                key={account}
                style={{ fontSize: 18 }}
                label={`${idx + 1}: ${account}`}
                onPress={() => onAccountPress(account)}
            />
        ));
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 }}>
                <Text style={{ marginBottom: 20, textAlign: 'center' }}>
                    Select a test account from the TestRPC
                </Text>
                {renderAccountButtons()}
            </View>
        </ScrollView>
    );
};

SelectTestAccountScreen.navigationOptions = ({ navigation }) => ({
    title: 'Select TestRPC Account',
});

export default SelectTestAccountScreen;
