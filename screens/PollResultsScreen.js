import React from 'react';
import { Text, View } from 'react-native';
import Animation from 'lottie-react-native';
import PollBars from '../components/PollBars.js';

export default class PollResultsScreen extends React.Component {
    componentDidMount() {
        this.animation.play();
    }

    constructor(props) {
        super(props);

        console.log(this.props.numVotes);
    }

    render() {
        //let pic = {
        //    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        //};

        let pollData = { y: 0.75, n: 0.25 };

        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Animation
                    ref={animation => {
                        this.animation = animation;
                    }}
                    style={{ width: 200, height: 200 }}
                    source={require('../assets/images/pencil_write.json')}
                />
                <Text style={{ fontFamily: 'Baskerville', fontSize: 30 }}>Should we get bagels?</Text>
                <View style={{ height: 30 }} />
                <PollBars data={pollData} />
            </View>
        );
    }
}
