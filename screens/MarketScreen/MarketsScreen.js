import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './MarketsScreenStyle';

export default function MarketsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>This screen is under contruction. We are waiting for the designer to do his magic.</Text>
    </View>
  );
}

MarketsScreen.navigationOptions = {
  header: null
}