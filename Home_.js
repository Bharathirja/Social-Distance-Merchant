import React from 'react';  
import {StyleSheet, Text, View,Button,ScrollView} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';

class Home_ extends React.Component {  
  constructor(){
  super();
  this.state={
	  Request:[
		{
		   Name:'a',
		   Time:'12.55 P.M'
		},
		{
		   Name:'b',
		   Time:'11.10 A.M'
		},
		{
		   Name:'c',
		   Time:'04.00 P.M'
		}
	  ],
  }
  }
  render() {  
    return (  
        <ScrollView style={styles.container}>  
	        {
	                this.state.Request.map((u, i) => {
	                        return (
	                                <View key={i}>
						<View>
							<Text>{u.Name}</Text>
							<Text>{u.Time}</Text>
						<View>
						<View style={{flex:1,flexdirection:row}} >
							<Touchableobacity>
								<Text>Reallocate</Text>
							</Touchableobacity>
							<Touchableobacity>
								<Text>Accept</Text>
							</Touchableobacity>
						</View>
	                                </View>
	                        );
	                })
	        }
        </ScrollView>  
    );  
  }  
}   
class Available_Time extends React.Component {  
    render() {  
        return (  
        <ScrollView style={styles.container}>  

        </ScrollView>  
        );  
    }  
}  
class Scheduled extends React.Component {  
  constructor(){
  super();
  this.state={
	  Scheduled_Time:[
		{
		   Name:'w',
		   Time:'12.55 P.M'
		},
		{
		   Name:'x',
		   Time:'11.10 A.M'
		},
		{
		   Name:'z',
		   Time:'04.00 P.M'
		}
	  ],
  }
  }
    render() {  
        return (  
        <ScrollView style={styles.container}>  
	        {
	                this.state.Scheduled_time.map((u, i) => {
	                        return (
	                                <View key={i}>
						<View>
							<Text>{u.Name}</Text>
							<Text>{u.Time}</Text>
						<View>
						<View style={{flex:1,flexdirection:row}} >
							<Touchableobacity>
								<Text>Reallocate</Text>
							</Touchableobacity>
							<Touchableobacity>
								<Text>Cancel</Text>
							</Touchableobacity>
						</View>
	                                </View>
	                        );
	                })
	        }
        </ScrollView> 
        );  
    }  
}  
class Profile extends React.Component {  
  render() {  
    return (  
        <ScrollView style={styles.container}>  

        </ScrollView> 
    );  
  }  
} 
const styles = StyleSheet.create({  
    container: {   
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home_: { screen: Home_,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
            }  
        },  
        Available_Time: { screen: Available_Time,  
            navigationOptions:{  
                tabBarLabel:'History',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-clockcircleo'}/>  
                    </View>),
            }  
        },  
        Scheduled: {  
            screen: Cart,  
            navigationOptions:{  
                tabBarLabel:'Cart',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-clockcircleo'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: Profile,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>), 
            }  
        },  
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  
  
export default createAppContainer(TabNavigator);
