import React from 'react';
import { Animated, Text, View, Dimensions } from 'react-native';

export default class FadeInView extends React.Component {
  constructor(props){
    super(props);
    console.log('fadeInView data', this.props.data);
  }

  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    let {height, width} = Dimensions.get('window');

    let colorOpts = {1:'green', 0:'red'};
    let barColor = colorOpts[this.props.answer];

    return (
      <Animated.View                 // Special animatable View
        style={{
          opacity: fadeAnim,         // Bind opacity to animated value
          width: width * this.props.data,
          height: 30,
          backgroundColor: barColor,
          borderRadius: 20,
        }}
      >
      </Animated.View>
    );
  }
}
