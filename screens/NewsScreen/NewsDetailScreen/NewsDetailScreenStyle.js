import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../../constants/Colors'

let deviceWidth = Dimensions.get('window').width

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  header: {
    paddingVertical: 10,
    paddingLeft: 15,
  },
  headerMajor: {
    fontSize: 28,
    fontWeight: '400',
    textTransform: 'uppercase'
  },
  headerMinor: {
    fontSize: 10,
    fontWeight: '100'
  },
  contentImage: {
    width: deviceWidth - 20,
    height: 250,
    marginHorizontal: 10,
  },
  contentText: {
    width: deviceWidth,
    marginTop: 20,
    paddingHorizontal: 20,
    textAlign: 'justify',
    lineHeight: 30
    }
});