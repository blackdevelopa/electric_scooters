import React from 'react'
import { View, Text, StatusBar, TextInput, ScrollView, Image } from 'react-native'
import styles from './NewsScreenStyles'
import Colors from '../../constants/Colors'
import TabBarIcon from '../../components/TabBarIcon'


export default function NewsScreen() {
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
        <View style={styles.card}>
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
        </View>
        <View style={styles.card}>
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
        </View>
        <View style={styles.card}>
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
        </View>
        <View style={styles.card}>
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
        </View>
        <View style={styles.card}>
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
        </View>
        <View style={styles.card}>
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
        </View>
        <View style={styles.card}>
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
        </View>
        <View style={styles.card}>
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
        </View>
      </ScrollView>
    </View>
  )
}

NewsScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: Colors.newsTopContainer,
  }
};