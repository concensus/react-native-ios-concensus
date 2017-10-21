import React from 'react';
import {
    Button,
    ScrollView,
} from 'react-native';

const MainScreen = ({ navigation }) => {
    const onProposeMotionPress = ()  => {
        navigation.navigate('NewPoll');
    };

    return (
        <ScrollView>
            <Button
                title="Propose a Motion"
                onPress={onProposeMotionPress}
            />
        </ScrollView>
    );
};

export default MainScreen;
