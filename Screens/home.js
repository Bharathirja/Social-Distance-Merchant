
import React,{Component} from 'react';
import { Button, View, Text,SafeAreaView ,StyleSheet,TouchableOpacity,FlatList,Alert} from 'react-native';
import { createStackNavigator, HeaderBackground} from '@react-navigation/stack';
// import TabADetailsScreen from '../Screens/tabDetails.js';
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

// import * as React from 'react';
// import {
//   Text, 
//   View,
//   SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

class TabADetailsScreen extends Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'white',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25,  shadowColor: '#00000021',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12,}}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>

        )
    }

    clickEventListener = (item,navigation) => {
      Alert.alert('Message', 'Item clicked. '+item.name);
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'#ebf0f7', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                  
            </View>
            {/* <Text style={{marginBottom:30}}>Hello</Text>*/}
            <View style={styles.container}> 
            <TouchableOpacity style={styles.card}>
                <View style={styles.cardContent}>
                  <Text >Customer name</Text>
                  <Text >Time:12:45 PM</Text>
                  <Text >Date:13-07-2020</Text>
                  
                </View>
              </TouchableOpacity>


              
              
            </View>
           
          
            
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    // marginTop:20,
    // marginBottom:100,
    // backgroundColor:"#ebf0f7"
    marginBottom:100
  },
  contentList:{
    // flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10,
    // marginBottom:50
  },
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"black",
    fontWeight:'bold'
  },
  time:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
});

