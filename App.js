
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './Screens/tabs.js';
import { Ionicons } from '@expo/vector-icons';

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
      <Drawer.Navigator initialRouteName="Home"  
        drawerContentOptions={{
        activeTintColor: 'tomato',
        itemStyle: { marginVertical: 10 },
  }}>
        <Drawer.Screen name="Home" component={TabScreen}

        options={{
          title: 'Home',
          drawerIcon: ({focused, size,color}) => (
            <Ionicons
              name="ios-home"
              size={size}
              color={focused ? 'tomato' : '#ccc'}
            />
          ),
        }}/>

        <Drawer.Screen name="Settings" component={SettingScreen} 
        options={{
          title: 'Settings',
          drawerIcon: ({focused, size,color}) => (
            <Ionicons
              name="ios-settings"
              size={size}
              color={focused ? 'tomato' : '#ccc'}
            />
          ),
        }}/>
        <Drawer.Screen name="About" component={AboutScreen} 
         options={{
          title: 'About',
          drawerIcon: ({focused, size,color}) => (
            <Ionicons
              name="ios-help-circle"
              size={size}
              color={focused ? 'tomato' : '#ccc'}
            />
          ),
        }}/>

      </Drawer.Navigator>
    </NavigationContainer>
  )
}


