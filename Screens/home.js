
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import TabADetailsScreen from '../Screens/tabDetails.js';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function HomeScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabADetailsScreen}  options={{
        headerStyle: {
          backgroundColor: 'tomato',
          
        },
        headerRight: () => (
          <View style={{marginRight:20}}>
          <Ionicons name="ios-power" size={24} color="white" onPress={() => alert('Do you want to logout?')}/>
          </View>
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }}}/>
      </Stack.Navigator>
    );
  }