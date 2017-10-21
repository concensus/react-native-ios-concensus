import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: [
        {
          author: "andy-id-andy-id-andy-id-andy-id",
          body: "This is Andy'c comment. This is Andy'c comment. This is Andy'c comment. This is Andy'c comment."
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.author}</Text>}
          />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
