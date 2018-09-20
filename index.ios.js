// Index.ios.js - place code in here for IOS!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
    <Header />
);

/*
we can also write the above like this:
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};
we refactored it so it would look better
*/

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
