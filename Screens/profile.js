
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

 function ProfileDetails () {

    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

                <Text style={styles.name}>
                  John Doe
                </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.textInfo}>
                johndoe@gmail.com
              </Text>
          
              <Text style={styles.textInfo}>
                Mobile Number: +9123456786
              </Text>
            
              <Text style={styles.textInfo}>
                Location: Chennai 
              </Text>
            </View>
        </View>
      </View>
    );
  
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

  const styles = StyleSheet.create({
    header:{
      backgroundColor: "#1E90FF",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    textInfo:{
      fontSize:18,
      marginTop:20,
      color: "#696969",
    }
  });
   