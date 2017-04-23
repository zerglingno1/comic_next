import React from 'react';
import {
  Text,
  ActivityIndicator, 
  StyleSheet,
  View
} from 'react-native';

export default class MainPage extends React.Component {
  static navigationOptions = {
     title: 'Main', 
     header: { visible: false } 
    };
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
    <View>HELLO</View>);
  }
}