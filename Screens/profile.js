
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ProfileDetails() {
  return (
    <View>
      <Text>Hello Profile</Text>
    </View>
  )
}

export default function ProfileScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileDetails}  options={{
        headerStyle: {
          backgroundColor: 'tomato',
          
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }}}/>
      </Stack.Navigator>
    );
  }