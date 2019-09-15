import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './PortfolioScreenStyle';

export default class PortfolioScreen extends Component {
  state = {
    result: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.contentText}>Welcome to Stock App</Text>
        <TouchableOpacity onPress={this.gotoSite}>
          <Text 
            style={styles.contentButton}>Click to go to our website</Text>
        </TouchableOpacity>
      </View>
    );
  }

  gotoSite = async() => {
    let result = await WebBrowser.openBrowserAsync('https://dribbble.com/shots/7144102-News-Stock-App');
    this.setState({result})
  }
}

PortfolioScreen.navigationOptions = {
  header: null,
};


