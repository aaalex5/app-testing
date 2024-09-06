import React from 'react';
import { AppRegistry } from 'react-native-web';
import App from './App';

// Register the app component
AppRegistry.registerComponent('App', () => App);

// Render the app in the root div
AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('app'),
});
