import React from 'react';
import {
  ListView
} from 'react-native';
import CommentSection from '../components/CommentSection'

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <CommentSection pollID="poll-id"/>
    );
  }
}
