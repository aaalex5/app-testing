import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';

const EventItem = ({ eventName }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{eventName}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 100,
    backgroundColor: '#FF9800',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default EventItem;
