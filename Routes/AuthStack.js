import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

import {createStackNavigator} from '@react-navigation/stack';
import Checkout from '../screens/Checkout';

const Stack = createStackNavigator();

export default function AuthStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Checkout"
      screenOptions={{
        headerStyle: {backgroundColor: '#f96332'},
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        /* options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
          // headerShown: false,
        }} */
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        /* options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
          // headerShown: false,
        }} */
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        /* options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
          // headerShown: false,
        }} */
      />
    </Stack.Navigator>
  );
}
