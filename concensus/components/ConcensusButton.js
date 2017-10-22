import React from 'react';
import { TouchableHighlight, Text } from 'react-native'
import styles from './shared/baseStyles';

export default function ConcensusButton({ style={}, label, onPress, underlayColor }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor='rgba(0,0,0,0)'>
      <Text style={{...styles.button, ...style}}>{label.toUpperCase()}</Text>
    </TouchableHighlight>
  );
}