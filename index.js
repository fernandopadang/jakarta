import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import BaseLayout from './packages/layouts/base-layout';

const App = () => <BaseLayout />;

AppRegistry.registerComponent(appName, () => App);
