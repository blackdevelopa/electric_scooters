import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './MarketsScreenStyle';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text>Welcome to Stock App</Text>
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};
