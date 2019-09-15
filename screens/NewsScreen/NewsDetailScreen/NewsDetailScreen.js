import React from 'react'
import { View, Text, ScrollView, Image, Alert } from 'react-native';
import styles from './NewsDetailScreenStyle'

export default function NewsDetailScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerMajor}>Deciphering Marketing Lingo For Small Business Owners</Text>
        <Text style={styles.headerMinor}>Yahoo Finance on Appl 1h</Text>
      </View>
      <View>
        <ScrollView>
          <Image
            style={styles.contentImage}
            source={{
              uri: 'https://source.unsplash.com/random'
            }}
          />
          <Text style={styles.contentText} onLongPress={() => Alert.alert('Bored already?', 'You dont have to read everything you know.')}>
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
            
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
            
            Various versions have evolved over the years, sometimes by accident,sometimes on purpose (injected humour and the like).

            Where can I get some?
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </Text>
        </ScrollView>
      </View>
    </View>
  )
}