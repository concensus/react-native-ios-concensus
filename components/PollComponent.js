import React from 'react';
import { Text, View } from 'react-native';

export default class PollComponent extends React.Component {
    constructor(props) {
        super(props);
        /*
		* title
		* pollDescription
		*/
        console.log('poll description', this.props.description);
        console.log(this.props.numVotes);
    }

    render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */

        return (
            <View>
                <Text style={{ fontFamily: 'Baskerville', fontSize: 30 }}>{this.props.title}</Text>
                <Text style={{ fontFamily: 'Baskerville', fontSize: 15 }}>{this.props.description}</Text>
            </View>
        );
    }
}
