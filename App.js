
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ProfileScreen from './Screens/profile.js';
import HomeScreen from './Screens/home.js';
import AllocatedScreen from './Screens/allocated.js';

const Tab = createBottomTabNavigator();


// Main App
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'Home') {
        iconName = focused
        ? 'ios-home'
        : 'ios-home';
      } else if (route.name === 'Profile') {
        iconName = focused
        ? 'ios-contact'
        : 'ios-contact';
      }
      else if (route.name === 'Allocated') {
        iconName = focused
        ? 'ios-timer'
        : 'ios-timer';
      }
      return <Ionicons name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Allocated" component={AllocatedScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


