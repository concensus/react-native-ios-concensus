import React from 'react';
import { TouchableHighlight, Text } from 'react-native'
import styles from './shared/baseStyles';

export default function ConcensusButton({ label, onPress, underlayColor }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={underlayColor}>
      <Text style={styles.button}>{label}</Text>
    </TouchableHighlight>
  );
}