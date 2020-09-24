import React from 'react';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
//import RegistrationScreen from "../screens/RegistrationScreen";
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AuthStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
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
    </Stack.Navigator>
  );
}
