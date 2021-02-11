import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import AlbumList from './packages/components/AlbumList';

const App = () => (
  <View>
    <AlbumList />
  </View>
);

AppRegistry.registerComponent(appName, () => App);
