
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './Screens/tabs.js';

// Drawer Settings Screen 
function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>setting page</Text>
      <Button 
      onPress={() => navigation.goBack()}
      title="Go back home"
      />
    </View>
  );
}

// Drawer About Screen
function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcomt to About page!</Text>
      <Button 
      onPress={() => navigation.goBack()}
      title="Go back home"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabScreen} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}


