import React from 'react';

import {Stylesheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import NotificationScreen from "./src/screens/NotificationScreen";
import {AuthContext, AuthProvider} from "./src/provider/AuthProvider";


const AuthStack = createStackNavigator();
const WelcomeTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerScreens = () => {
  return(
    <Drawer.Navigator initialRouteName = "Welcome">
      <Drawer.Screen name = "Welcome" component = {WelcomeScreenTab} />
    </Drawer.Navigator>
  );
}

const WelcomeScreenTab = () => { 
  return(
    <WelcomeTab.Navigator 
      initialRouteName = "Welcome"
      activeColor = "#030659"
      shifting = {true}>
      <WelcomeStack.Screen name = "Welcome" 
        component = {WelcomeScreen}
        options = {{
          tabBarLabel : "Welcome",
          tabBarColor : "#1a8bab",
          tabBarIcon : ({color}) => (
            <MaterialCommunityIcons name="home-heart" size={24} color="black" />
          ),
        }}
      />
      <WelcomeTab.Screen name = "Notification"
        component = {NotificationScreen}
        options = {{
          tabBarLabel : "Notification",
          tabBarColor : "#067bc9",
          tabBarIcon : ({color}) => (
            <Ionicons name="md-notifications" size={24} color="black" />
          ),

        }}
      />
    </WelcomeTab.Navigator>
  );
};

                 //Auth flow

const AuthStackScreen = () =>{         
  return(
    <AuthStack.Navigator initialRouteName = 'SignIn'>
      <AuthStack.Screen 
        name = 'SignIn' 
        component = {SignInScreen} 
        options ={{headerShown: false}}
      />
      <AuthStack.Screen 
        name = 'SignUp' 
        component = {SignUpScreen}
        options = {{headerShown: false}}
      />
    </AuthStack.Navigator>
  )
}

function App(){
  return(
    <AuthProvider>   
      <AuthContext.Consumer>
        {(auth) => (
        <NavigationContainer> 
          {auth.IsLoggedIn ? <DrawerScreens /> : <AuthStackScreen />}
        </NavigationContainer>)}
      </AuthContext.Consumer> 
    </AuthProvider>
    
  );
}

export default App;
