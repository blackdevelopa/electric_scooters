import React from 'react';
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.newsTopContainer,
  },
  contentText: {
    fontSize: 24,
    color: Colors.white,
    marginBottom: 10
  },
  contentButton: {
    color: Colors.white,
    textAlign: 'center',
    paddingVertical: 10,
    height: 40,
    width: 200,
    borderRadius: 20,
    backgroundColor: Colors.searchbarFade,
    fontSize: 15
  }
});