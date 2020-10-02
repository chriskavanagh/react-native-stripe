import React from 'react';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import FoodStack from './FoodStack';
import CartStack from './CartStack';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#DCDCDC'}}
      tabBarOptions={{
        labelPosition: 'below-icon',
        activeBackgroundColor: '#f0edf6',
      }}>
      <Tab.Screen
        name="User"
        component={AuthStack}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={FoodStack}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            <Icon name="ios-book-sharp" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <Icon name="basket-sharp" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
