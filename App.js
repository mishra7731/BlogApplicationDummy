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
import ProfileScreen from './src/screens/ProfileScreen';
import PostScreen from './src/screens/PostScreen';

import {AuthContext, AuthProvider} from "./src/provider/AuthProvider";

const AuthStack = createStackNavigator();
const WelcomeTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const WelcomeStack = createStackNavigator();
const CommentPostStack = createStackNavigator();

const DrawerScreens = () => {
  return(
    <Drawer.Navigator drawerStyle = {{backgroundColor : "#81baf0"}}>
      <Drawer.Screen name = "Welcome" component = {WelcomeScreenTab} />
      <Drawer.Screen name = "Profile" component = {ProfileScreen} />

    </Drawer.Navigator>
  );
}

const WelcomePostStackScreen = () => {
  return(
    <WelcomeStack.Navigator initialRouteName = "Welcome">
      <WelcomeStack.Screen name = "Welcome" component = {WelcomeScreen} options = {{headerShown : false}}/>
      <WelcomeStack.Screen name = "IndividualPost" component = {PostScreen} options = {{headerShown : false}}/>
    </WelcomeStack.Navigator>
  )
}

const WelcomeScreenTab = () => { 
  return(
    <WelcomeTab.Navigator 
      initialRouteName = "Welcome"
      activeColor = "#030659"
      shifting = {true}>
      <WelcomeTab.Screen 
        name = "Welcome" 
        component = {WelcomePostStackScreen}
        options = {{
          tabBarLabel : "Welcome",
          tabBarColor : "#1a8bab",
          tabBarIcon : ({focused}) => 
          focused ? (
            <MaterialCommunityIcons name="home-heart" size={24} color="white" />
          ) : (
            <MaterialCommunityIcons name="home-lock" size={24} color="black" />
          ),
        }}
      />
      <WelcomeTab.Screen 
        name = "Notification"
        component = {NotificationScreen}
        options = {{
          tabBarLabel : "Notification",
          tabBarColor : "#067bc9",
          tabBarIcon : ({focused}) => 
          focused ? (
            <Ionicons name="md-notifications" size={24} color="white" />
          ) :
          (
            <Ionicons name="md-notifications-outline" size={24} color="white" />
          ),

        }}
      />
    </WelcomeTab.Navigator>
  );
};


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
