import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native-web';

const TagButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ddd',
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10, // Add some space between buttons
    alignSelf: 'flex-start',
  },
  label: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default TagButton;
