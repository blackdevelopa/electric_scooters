import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export default styles = StyleSheet.create({
  topContainer: {
    backgroundColor: Colors.newsTopContainer,
    height: 160,
  },
  iconStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 25
  },
  topContainerText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'roboto-bold',
    marginHorizontal: 25
  },
  searchBar: {
    borderRadius: 10,
    backgroundColor: Colors.searchbarFade,
    paddingVertical: 10,
    marginHorizontal: 12,
    marginTop: 20,
  },
  searchBarText: {
    textAlign: 'center',
    color: Colors.white,
  },
  bottomContainer: {
    backgroundColor: Colors.white,
    height: '100%'
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardText: {
    paddingLeft: 10,
    width: '70%',
    paddingTop: 8
  },
  cardTextHeader: {
    fontSize: 20,
    fontWeight: '300'
  },
  cardTextFooter: {
    fontSize: 10,
    fontWeight: '200',
    paddingVertical: 8
  },
  cardLine: {
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1
  },
  cardImage: {
    width: 75,
    height: 90,
    borderRadius: 10
  }
})