import React from 'react';
import Cart from '../screens/Cart';
import Menu from '../screens/Menu';
//import AddFood from "../screens/AddFood";
import Checkout from '../screens/Checkout';
import NavHeader from '../components/NavHeader';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function FoodStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle: {backgroundColor: '#f96332'},
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
          // headerShown: false,
        }}
      />
      {/* <Stack.Screen name="Add Food" component={AddFood} /> */}
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}
