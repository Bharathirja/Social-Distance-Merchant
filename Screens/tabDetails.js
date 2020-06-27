
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button} from 'react-native';
import Constants from 'expo-constants';
// This is for just example will clear this one

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Customer 1',
    time:'11.03 am'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Customer 2',
    time:'12.00 pm'

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Customer 3',
    time:'13.00 pm'

  },
];


function Item({ title,time }) {
  return (
    <View style={styles.item} >
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={{marginLeft:20,fontWeight:'bold',textAlign:'center'}}>{time}</Text>
        </View>
      <View style={{marginLeft:10}}>
          <Button  
            title="Accept"
            color="#87ceeb"/>
      </View>
      <View style={{marginLeft:10}}>

        <Button  
          title="Reject"
          color='silver'/>
      </View>
    </View>
  );
}



export default function TabADetailsScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} time={item.time}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      flex:1,
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 10,
      flexDirection:'row',
      borderRadius:10,
      alignItems:'center'
      
    },
    title: {
      fontSize: 16,
      flexDirection:'row'
    },
  });