import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native-web';
import PlanScreen from './test-screens/PlanScreen';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={[styles.container, { width, height }]}>
      <PlanScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});
