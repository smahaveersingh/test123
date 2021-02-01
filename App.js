import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';


const stackNavigator = createStackNavigator({
  screenA: ScreenA,
  screenB: ScreenB
})


const App = createAppContainer(stackNavigator)
export default App