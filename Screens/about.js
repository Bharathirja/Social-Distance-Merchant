import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';

// const  data = [{
//   value: 'Banana',
// }, {
//   value: 'Mango',
// }, {
//   value: 'Pear',
// }];


export default class AboutScreen extends Component {

  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerTitle}>
               About
              </Text>
          </View>

          <View style={styles.postContent}>
              <Text style={styles.postTitle}>
                App Info
              </Text>

              <Text style={styles.postDescription}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
              </Text>

              <View style={{flex:1}}>



<ScrollView style={{paddingHorizontal:10}}>
  {/* <View>

    <Text style={styles.text}>
      { this.state.About_us }
    </Text>

  </View> */}
  
  <View style={{height:1,backgroundColor:'grey',}}>
  </View>

  <View>

    <View style={{alignItems:'center',paddingVertical:20}}>
      <Text style={styles.txt}>
        Report Issues
      </Text>
    </View>
    
    <Dropdown label='Enter Your Error:' data={data} style={styles.dd} />

    <View style={{paddingTop:20}}>
      <TextInput 
        style={styles.textinput} 
        underlineColorAndroid="transparent"
        placeholder={"Description:"}
        placeholderTextColor={"#9E9E9E"}
        numberOfLines={10}
        multiline={true}
      >

      </TextInput>
    </View>

    <View style={{alignItems:'center',justifyContent:'center',           
    paddingTop:20}}>
      <TouchableOpacity style={styles.submit}>
        <Text style={{fontSize:20,color:'white'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>

  </View>

</ScrollView>
            

</View>

          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    padding:30,
    alignItems: 'center',
    backgroundColor: "tomato",
  },
  headerTitle:{
    textAlign:'left',
    fontSize:20,
    color:"#FFFFFF",
    marginTop:10,
    fontWeight:'bold'
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  postContent: {
    flex: 1,
    padding:30,
  },
  postTitle:{
    fontSize:26,
    fontWeight:'600',
  },
  postDescription:{
    fontSize:16,
    marginTop:10,
  },
  tags:{
    color: '#00BFFF',
    marginTop:10,
  },
  date:{
    color: '#696969',
    marginTop:10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: "#00BFFF",
  },
  profile:{
    flexDirection: 'row',
    marginTop:20
  },
  name:{
    fontSize:22,
    color:"#00BFFF",
    fontWeight:'600',
    alignSelf:'center',
    marginLeft:10
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
  topbar: {
    flex:1,
    flexDirection: 'row',
    height: 120,
		backgroundColor: 'lightgreen',
		//borderBottomLeftRadius: 6,
		//borderBottomRightRadius: 6
	},
	text: {
    backgroundColor: 'white',
		color: 'grey',
    fontSize: 25,
    // fontFamily: 'Times',
    paddingBottom:20
	},
  txt: {
    // fontFamily:'Arial',
    fontWeight:'bold',
    fontSize:20,
    color:'#239484'
  },
  dd:{
  },
  textinput:{
    paddingHorizontal:2,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#9E9E9E',
    borderRadius: 20,
    height: 150,
    fontSize:20,
    // fontFamily:'Times'
  },
  submit:{
    height:30,
    width:90,
    backgroundColor:'#239484',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  }
});
  

import { Dropdown } from 'react-native-material-dropdown';

