
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import TabADetailsScreen from '../Screens/tabDetails.js';
import Details from '../Screens/details'

const Stack = createStackNavigator();

export default function HomeScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabADetailsScreen} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    );
  }