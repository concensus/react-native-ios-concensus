// import React, { Component } from 'react';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   ListView
// } from 'react-native';
// import {firebase,newComment} from "../../api/firebase"

// export default class DiscussionSection extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       discussions: []
//     };
//   }

//   componentDidMount(){
//     this.getDiscussion();
//     // newComment(id, {
//     //   author: "andy2",
//     //   body: "okkkkk"
//     // })
//   }

//   getDiscussion(){
//     var id = this.props.pollID;
//     let discussionRef = firebase.database().ref(`polls/${id}/discussions`);
//     discussionRef.on("value", (snapshot)=>{
//       this.setState({ discussions: [] });
//       var discussionsSlice = this.state.discussions.slice();
//       snapshot.forEach(child => {
//         discussionsSlice.push({
//           ...child.val(),
//         })
//       });
//       this.setState({ discussions: discussionsSlice })
//     })
//   }
  
//   renderComments() {
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     if(this.state.discussions.length > 0){
//       return(
//         <ListView
//           dataSource={}
//           renderRow={(d) => <Text>{d.author}: {d.body}</Text>}
//         />
//       )
//     }
//     return <Text>No Comments</Text>;
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {this.renderComments()}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },

// });
