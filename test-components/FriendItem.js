import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native-web';

const FriendItem = ({ friendName, isSelected, onSelect }) => (
  <TouchableOpacity style={styles.container} onPress={onSelect}>
    <View style={[styles.checkbox, isSelected && styles.checkboxSelected]} />
    <Text style={styles.text}>{friendName}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2196F3',
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: '#2196F3',
  },
  text: {
    fontSize: 16,
  },
});

export default FriendItem;
