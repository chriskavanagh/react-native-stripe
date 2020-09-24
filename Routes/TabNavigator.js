import React from 'react';
import AuthStack from './AuthStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="User"
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
    </Tab.Navigator>
  );
};
