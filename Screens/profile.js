
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


const Stack = createStackNavigator();

 export default function ProfileScreen () {

    return (
      <View style={styles.container}>
          <View style={styles.header}>
          </View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Merchant Name</Text>
              {/* <Text style={styles.info}>ID :3434343434</Text> */}
              <Text style={styles.description}>xxxxyyyyzzz@gmail.com</Text>

              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>+913434343434</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Chennai</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>GST Number:345454545</Text>  
              </TouchableOpacity>
                           
              
            </View>
        </View>
      </View>
          
             
    );
  
}



// export default function ProfileScreen() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Profile" component={ProfileDetails}  options={{
//         headerStyle: {
//           backgroundColor: 'tomato',
          
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold'
//         }}}/>
//       </Stack.Navigator>
//     );
//   }

  const styles = StyleSheet.create({
    header:{
      backgroundColor: "tomato",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
  });
   