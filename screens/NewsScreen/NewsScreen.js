import React, { Component } from 'react'
import { View, Text, StatusBar, TextInput, ScrollView, Image, TouchableOpacity, Button } from 'react-native'
import styles from './NewsScreenStyles'
import Colors from '../../constants/Colors'
import TabBarIcon from '../../components/TabBarIcon'

export default class NewsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.topContainer}>
          <StatusBar barStyle="light-content" hidden={false} />
          <View style={styles.iconStyle}>
            <TabBarIcon
              name={'ios-menu'}
            />
            <TabBarIcon
              name={'ios-notifications-outline'}
            />
          </View>
          <Text style={styles.topContainerText}>NEWS</Text>
          <View style={styles.searchBar}>
            <TextInput 
              style={styles.searchBarText}
              placeholder="Search news"
              placeholderTextColor="#fff"
            />
          </View>
        </View>
        <ScrollView style={styles.bottomContainer}>
          <TouchableOpacity style={styles.card} onPress={() => navigate('NewsDetail')}>
            <View style={styles.cardText}>
              <Text style={styles.cardTextHeader}>How to Protect Your Computer Very Useful Tips</Text>
              <Text style={styles.cardTextFooter}>Yahoo Finance on Appl 1h</Text>
              <View style={styles.cardLine}></View>
            </View>
            <Image
              style={styles.cardImage}
              source={{uri: 
                'https://source.unsplash.com/random'
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigate('NewsDetail')}>
            <View style={styles.cardText}>
              <Text style={styles.cardTextHeader}>How to Protect Your Computer Very Useful Tips</Text>
              <Text style={styles.cardTextFooter}>Yahoo Finance on Appl 1h</Text>
              <View style={styles.cardLine}></View>
            </View>
            <Image
              style={styles.cardImage}
              source={{uri: 
                'https://source.unsplash.com/random'
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigate('NewsDetail')}>
            <View style={styles.cardText}>
              <Text style={styles.cardTextHeader}>How to Protect Your Computer Very Useful Tips</Text>
              <Text style={styles.cardTextFooter}>Yahoo Finance on Appl 1h</Text>
              <View style={styles.cardLine}></View>
            </View>
            <Image
              style={styles.cardImage}
              source={{uri: 
                'https://source.unsplash.com/random'
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigate('NewsDetail')}>
            <View style={styles.cardText}>
              <Text style={styles.cardTextHeader}>How to Protect Your Computer Very Useful Tips</Text>
              <Text style={styles.cardTextFooter}>Yahoo Finance on Appl 1h</Text>
              <View style={styles.cardLine}></View>
            </View>
            <Image
              style={styles.cardImage}
              source={{uri: 
                'https://source.unsplash.com/random'
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigate('NewsDetail')}>
            <View style={styles.cardText}>
              <Text style={styles.cardTextHeader}>How to Protect Your Computer Very Useful Tips</Text>
              <Text style={styles.cardTextFooter}>Yahoo Finance on Appl 1h</Text>
              <View style={styles.cardLine}></View>
            </View>
            <Image
              style={styles.cardImage}
              source={{uri: 
                'https://source.unsplash.com/random'
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigate('NewsDetail')}>
            <View style={styles.cardText}>
              <Text style={styles.cardTextHeader}>How to Protect Your Computer Very Useful Tips</Text>
              <Text style={styles.cardTextFooter}>Yahoo Finance on Appl 1h</Text>
              <View style={styles.cardLine}></View>
            </View>
            <Image
              style={styles.cardImage}
              source={{uri: 
                'https://source.unsplash.com/random'
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigate('NewsDetail')}>
            <View style={styles.cardText}>
              <Text style={styles.cardTextHeader}>How to Protect Your Computer Very Useful Tips</Text>
              <Text style={styles.cardTextFooter}>Yahoo Finance on Appl 1h</Text>
              <View style={styles.cardLine}></View>
            </View>
            <Image
              style={styles.cardImage}
              source={{uri: 
                'https://source.unsplash.com/random'
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigate('NewsDetail')}>
            <View style={styles.cardText}>
              <Text style={styles.cardTextHeader}>How to Protect Your Computer Very Useful Tips</Text>
              <Text style={styles.cardTextFooter}>Yahoo Finance on Appl 1h</Text>
              <View style={styles.cardLine}></View>
            </View>
            <Image
              style={styles.cardImage}
              source={{uri: 
                'https://source.unsplash.com/random'
              }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

NewsScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: Colors.newsTopContainer,
  }
};