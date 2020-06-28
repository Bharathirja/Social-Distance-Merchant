
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const  data = [
  {id:1, name: "Mark Doe",   time:"11:23 PM",               image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
  {id:1, name: "John Doe",   time:"11:50 PM",               image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
  {id:2, name: "Clark Man",  time:"11:50 PM", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
  {id:3, name: "Jaden Boor", time:"01:50 PM",     image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
  {id:4, name: "Srick Tree", time:"02:50 PM",   image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
  {id:5, name: "John Doe",   time:"03:23 PM", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
  {id:6, name: "John Doe",   time:"04:40 PM",           image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
  {id:8, name: "John Doe",   time:"05:40 PM",           image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
  {id:9, name: "John Doe",   time:"02:20 AM",           image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
  {id:9, name: "John Doe",   time:"14:00 PM",           image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
]

function clickEventListener(item) {
  Alert.alert(item.name)
}

 function AllocatedDetails () {
  
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {clickEventListener(item)}}>
                {/* <View style={styles.cardHeader}> */}
                  {/* <Image style={styles.icon} source={{uri:"https://img.icons8.com/flat_round/64/000000/hearts.png"}}/> */}
                {/* </View> */}
                <Image style={styles.userImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.time}>Time:{item.time}</Text>
                    
                    <TouchableOpacity style={styles.followButton} onPress={()=> clickEventListener(item)}>
                      <Text style={styles.followButtonText}>Rellocate</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rejectButton} onPress={()=> clickEventListener(item)}>
                      <Text style={styles.followButtonText}>Cancel</Text>  
                    </TouchableOpacity>

                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
}

    


const Stack = createStackNavigator();



export default function AllocatedScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Allocated" component={AllocatedDetails}  options={{
        headerStyle: {
          backgroundColor: 'tomato',
          
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }}}/>
        {/* <Stack.Screen name="Details" component={Details} /> */}
      </Stack.Navigator>
    );
  }

  const styles = StyleSheet.create({
    container:{
      // flex:1,
      marginTop:10,
    },
    list: {
      paddingHorizontal: 5,
      backgroundColor:"#E6E6E6",
    },
    listContainer:{
     alignItems:'center'
    },
    /******** card **************/
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
  
      marginVertical: 5,
      backgroundColor:"white",
      flexBasis: '46%',
      marginHorizontal: 5,
      borderRadius:5
    },
    cardFooter: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      alignItems:"center", 
      justifyContent:"center"
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardHeader:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
    },
    userImage:{
      height: 120,
      width: 120,
      borderRadius:60,
      alignSelf:'center',
      borderColor:"#DCDCDC",
      borderWidth:3,
    },
    name:{
      fontSize:18,
      flex:1,
      alignSelf:'center',
      color:"#008080",
      fontWeight:'bold'
    },
    time:{
      fontSize:14,
      flex:1,
      alignSelf:'center',
      color:"#696969"
    },
    followButton: {
      marginTop:10,
      height:35,
      width:100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    rejectButton: {
      marginTop:10,
      height:35,
      width:100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "tomato",
    },
    followButtonText:{
      color: "#FFFFFF",
      fontSize:16,
    },
    icon:{
      height: 20,
      width: 20, 
    }
  }); 