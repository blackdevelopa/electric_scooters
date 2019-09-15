import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './NewsDetailScreenStyle'

export default function NewsDetailScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Deciphering Marketing Lingo For Small Business Owners</Text>
        <Text>Small text</Text>
      </View>
      <View>
        <Image />
        <ScrollView>
          <Text>Content</Text>
        </ScrollView>
      </View>
    </View>
  )
}