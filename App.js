

// #App.js
// This is full code for App.js
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
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
        <Tab.Screen name="Home" component={TabAScreen} />
        <Tab.Screen name="Allocated" component={AllocatedScreen} />

        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

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

const Stack = createStackNavigator();

function TabAScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabADetailsScreen} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

function TabADetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        Welcome to home page!
      </Text>
      <Button 
      onPress={() => navigation.navigate('Details')}
      title="Go to Details"
      />
    </View>
  );
}

function Details() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
         Details here!
      </Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Welcome to Profile page!
      </Text>
    </View>
  );
}

function AllocatedScreen() {
    return (
      <View>
        <Text style={{textAlign: 'center', marginTop: 300}}>
          Welcome to Allocated time page!
        </Text>
      </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}


