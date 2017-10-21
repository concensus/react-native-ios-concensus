import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView
} from 'react-native';

export default class CommentSection extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          author: "andy"
        },
        {
          author: "andya"
        }
      ]),
    };
  }
  renderComments() {
    if(this.state.dataSource.length == 0){
      return <Text>No Comments</Text>
    }else{
      return(
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.author}</Text>}
        />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
          {this.renderComments()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
