import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {decode, encode} from 'base-64';
import Checkout from './screens/Checkout';
import TabNavigator from './Routes/TabNavigator';

import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';

//Firebase won't work without this.
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
