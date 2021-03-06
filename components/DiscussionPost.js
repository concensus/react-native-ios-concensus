import React from 'react';
import { Text, View } from 'react-native';

export default function DiscussionPost({ post }) {
    const authorFirstLetter = post.author[0].toUpperCase();
    return (
        <View style={{ flex: 1, marginTop: 5, marginBottom: 7 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: stringToColor(post.author),
                    }}>
                    <Text
                        style={{
                            backgroundColor: 'transparent',
                            color: '#FFF',
                            fontFamily: 'Baskerville',
                            textAlign: 'center',
                            fontSize: 23,
                        }}>
                        {authorFirstLetter}
                    </Text>
                </View>
                <View style={{ paddingLeft: 5 }}>
                    <Text style={{ fontWeight: 'bold' }}>{post.author}</Text>
                    <Text style={{ fontFamily: 'Baskerville', fontSize: 18 }}>{post.body}</Text>
                </View>
            </View>
        </View>
    );
}

function stringToColor(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xff;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}
