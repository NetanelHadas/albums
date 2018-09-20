// Index.android.js - place code in here for Android!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
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

/* when we want to return a single component we will do it as follows:
const App = () => (
    <Header headerText={'Albums'} />
);

to return more than one component we need to wrap them in a view tag as above,
so we return single top level tag as required.
*/

/*
  in the root view element here we added a style with flex: 1 to prevent from the screen
  of our app to scroll back up after each time we scroll down a bit on our device.
  for one value in style there is no point creating an entire style object.
  flex: 1 means expand this component to fill the entire content area of the device.
*/

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
