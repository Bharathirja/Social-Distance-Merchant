// import * as React from 'react';
// import { 
//     Text, 
//     View, 
//     StyleSheet, 
//     SafeAreaView, ScrollView,
//     TextInput,
//     Platform,Image,
//     StatusBar } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

//  function TabDetails ({imageUrl,name}) {
//     return (
//       <TouchableOpacity>
//         <View style={{height:250,width:250,marginTop:20,borderWidth:0.9,borderColor:"#dddddd",marginLeft:20,borderRadius:10,shadowColor: '#00000021',
//         shadowOffset: {
//           width: 0,
//           height: 6,
//         },
//         shadowOpacity: 0.37,
//         shadowRadius: 7.49,
//         elevation: 12,}}>

//             <View style={{flex:4,borderRadius:60}}>
//                 <Image source={imageUrl} style={styles.image}/>
//             </View>

//             <View style={{flex:1,paddingTop:10,backgroundColor:'lightgray'}}>
//                 <Text style={{marginLeft:5,fontSize:16}}>{name}</Text>
//                 <Text style={{marginLeft:5,color:'grey',fontSize:12,marginTop:5}}>05 January 2020</Text>

//             </View>
//         </View>
//         </TouchableOpacity>
        
//     )
// }
// export default function TabDetailsScreen() {
//   return(
//     <View>
//       <ScrollView 
//           horizontal={true}
//           showsHorizontalScrollIndicator={false}>
//           <TabDetails imageUrl={require('../assets/home3.png')} name='Welcome 2' />
//           <TabDetails imageUrl={require('../assets/home4.jpg')} name='Welcome 3' />
//           <TabDetails imageUrl={require('../assets/home2.png')} name='Welcome 1' />
//       </ScrollView>
//       {/* <View style={{height:150,width:300,marginTop:50,borderWidth:0.9,marginLeft:20,borderRadius:10,shadowColor: '#00000021',
//         shadowOffset: {
//           width: 0,
//           height: 6,
//         },
//         shadowOpacity: 0.37,
//         shadowRadius: 7.49,
//         elevation: 12,}}>
//         <Text>Hello</Text>
//       </View> */}
//     </View>
  
//   )
// }


// const styles = StyleSheet.create({
//     image:{
//         flex:1,
//         width:null,
//         height:null,
//         resizeMode:'cover',
//         borderRadius:10
//     }
// })

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';

export default class ProductView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      product: {
        name:"Welcome",
        description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        created:"",
        images:[
          "https://bootdey.com/img/Content/avatar/avatar6.png", 
          "https://bootdey.com/img/Content/avatar/avatar2.png", 
          "https://bootdey.com/img/Content/avatar/avatar3.png", 
        ],
        colors:[
          "#00BFFF",
          "#FF1493",
          "#00CED1",
          "#228B22", 
          "#20B2AA",
          "#FF4500",
        ]
      },
       data : [
        {id:1, name: "Mark Doe",   time:"11:23 PM", date:'20-07-2020',              image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
        {id:1, name: "John Doe",   time:"11:50 PM", date:'20-07-2020',              image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
        {id:2, name: "Clark Man",  time:"11:50 PM", date:'20-07-2020',image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3, name: "Jaden Boor", time:"01:50 PM", date:'20-07-2020',    image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4, name: "Srick Tree", time:"02:50 PM", date:'20-07-2020',  image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:5, name: "John Doe",   time:"03:23 PM", date:'20-07-2020',image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
        {id:6, name: "John Doe",   time:"04:40 PM", date:'20-07-2020',          image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8, name: "John Doe",   time:"05:40 PM",  date:'20-07-2020',         image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9, name: "John Doe",   time:"02:20 AM",  date:'20-07-2020',         image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:9, name: "John Doe",   time:"14:00 PM",  date:'20-07-2020',         image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
      ]
    };
  }

  __setImageSelected = (image) => {
    this.setState({selectedImage:image});
  }

  __renderImages = () => {
    return(
      <View style={styles.smallImagesContainer}>
        {this.state.product.images.map((prop, key) => {
          return (
            <TouchableOpacity key={key} onPress={() => {this.__setImageSelected(prop)}}>
              <Image style={styles.smallImage} source={{uri:prop}}/>
            </TouchableOpacity>
          );
        })}
      </View>
    )
  }

  __renderColors = () => {
    return(
      <View style={styles.contentColors}>
        {this.state.product.colors.map((prop, key) => {
          return (
            <TouchableOpacity key={key} style={[styles.btnColor, {backgroundColor:prop}]}></TouchableOpacity> 
          );
        })}
      </View>
    )
  }

  render() {
    var mainImage = (this.state.selectedImage) ? this.state.selectedImage: this.state.product.images[0]; 
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.name}>{this.state.product.name}</Text>
            </View>
            <View >
              <View style={styles.header}>
                <View >
                  <Image style={styles.mainImage} source={{uri:mainImage}}/>
                </View>
                {/* {this.__renderImages()} */}
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.name}>{this.state.product.name}</Text>
            </View>
            <View>
              <View style={styles.header}>
                <View >
                  <Image style={styles.mainImage} source={{uri:mainImage}}/>
                </View>
                {/* {this.__renderImages()} */}
              </View>
            </View>
          </View>
          </ScrollView>

         
          <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Notifications</Text>
            </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>  
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Bookings")}>
          <View style={styles.bottomcard}>
          <View style={{marginLeft:20}}>
              <Text style={styles.cardTitle}>Customer Name</Text>
            <Text style={styles.description}>Time:02:34 PM</Text>

            <Text style={styles.description}>Date:02-07-2020</Text>

          </View>
            <View style={styles.cardContent}>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Bookings")}>

          <View style={styles.bottomcard} >
          <View style={{marginLeft:20}} onPress={()=>props.navigation.navigate("Bookings")}>
              <Text style={styles.cardTitle}>Customer Name</Text>
            <Text style={styles.description}>Time:02:34 PM</Text>

            <Text style={styles.description}>Date:02-07-2020</Text>

          </View>
          
            <View style={styles.cardContent}>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Bookings")}>

          <View style={styles.bottomcard}>
          <View style={{marginLeft:20}}>
              <Text style={styles.cardTitle}>Customer Name</Text>
            <Text style={styles.description}>Time:02:34 PM</Text>

            <Text style={styles.description}>Date:02-07-2020</Text>

          </View>
          
            <View style={styles.cardContent}>
            </View>
          </View>
          </TouchableOpacity>
</ScrollView>
          
        </ScrollView>

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // marginTop:20,
    // backgroundColor:"#ebf0f7",
  },
  content:{
    marginLeft:10,
    marginRight:10,
    marginTop:20,
  },
  header:{
    flexDirection:'row',
  },
  mainImage:{
    width:300,
    height:300,
  },
  smallImagesContainer:{
    flexDirection:'column',
    marginLeft:30
  },
  smallImage:{
    width:60,
    height:60,
    marginTop:5, 
  },
  btnColor: {
    height:40,
    width:40,
    borderRadius:40,
    marginHorizontal:3
  },
  contentColors:{
    flexDirection:'row', 
  },
  name:{
    fontSize:22,
    color:"#696969",
    fontWeight:'bold',
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    fontSize:14,
    color:"#696969",
    // marginBottom:50
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },

  /******** card **************/
  card:{
    shadowColor: 'white',
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
      borderRadius:5,
      borderRadius:30,
      // backgroundColor:'white'
  },
  bottomcard:{
    shadowColor: 'white',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      // elevation: 30,
  
      marginVertical:5,
      backgroundColor:"white",
      flexBasis: '76%',
      marginHorizontal: 5,
      borderRadius:5,
      // width:50,
      // height:10
  },
  cardContent: {
    // paddingVertical: 10.5,
    // paddingHorizontal: 10,
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
  cardTitle:{
    color:"#00BFFF",
    fontWeight:'bold',
    fontSize:16
  }
});  

 