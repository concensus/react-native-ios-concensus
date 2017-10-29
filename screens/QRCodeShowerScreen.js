import React from 'react';
import { View, Text, Image } from 'react-native';
function QRCodeShower() {
    return (
        <View style={{}}>
            <Text style={{ textAlign: 'center', marginTop: 30, fontSize: 20, fontFamily: 'Baskerville' }}>
        Share it!
            </Text>
            <Image
                style={{ width: 250, height: 250, margin: 'auto', marginLeft: 150 }}
                source={{ uri: 'https://i.imgur.com/CLMvoY2.png' }}
            />
        </View>
    );
}

export default QRCodeShower;
