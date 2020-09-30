import React from 'react';
import Home from '../screens/Home';
import NavHeader from '../components/NavHeader';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AuthStack({navigation}) {
  /* const openMenu = () => {
    navigation.toggleDrawer();
  }; */
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#f96332'},
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
          // headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
