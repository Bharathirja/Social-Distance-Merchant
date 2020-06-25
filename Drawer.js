import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import Home_ from 'Home.js';
import {  
    createSwitchNavigator,  
    createAppContainer,  
    createDrawerNavigator,  
    createStackNavigator  
} from 'react-navigation';  

export default class Drawer extends Component {  
    render() {  
        return <AppContainer />;  
    }  
}  
  
class Home extends Component {  
    static navigationOptions = {  
         title: 'Home',  
    };  
    render() {  
        return <Home_ />; 
    }  
}  
  
class Settings extends Component {  
    static navigationOptions = {  
         title: 'Settings',  
    };  
  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Settings</Text>  
            </View>  
        );  
    }  
}  
const SettingsStackNavigator = createStackNavigator(  
    {  
        SettingsNavigator: Settings  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
        return {  
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                />  
            )  
        };  
        }  
    }  
);  
  
const HomeStackNavigator = createStackNavigator(  
    {  
        HomeNavigator: Home  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);  
const AppDrawerNavigator = createDrawerNavigator({  
    Settings: {  
        screen: SettingsNavigator  
    },  
    Home: {  
        screen: HomeNavigator  
    },  
});  
  
const AppSwitchNavigator = createSwitchNavigator({  
    Settings: { screen: AppDrawerNavigator },  
    Home: { screen: Home },  
  
});  
  
const AppContainer = createAppContainer(AppSwitchNavigator);  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center'  
    }  
});  

