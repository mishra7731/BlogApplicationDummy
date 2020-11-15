import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';

const WelcomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const WelcomeStackScreen = () => { //alada rakhar karon hocche ei function ta ei midule er navigation return korbe
  return(
    <WelcomeStack.Navigator initialRouteName = 'Home'>
      <WelcomeStack.Screen name = 'Welcome' component = {WelcomeScreen}/>
    </WelcomeStack.Navigator>
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
    <NavigationContainer>
      <AuthStackScreen />
      {/* <WelcomeStackScreen/> */}
    </NavigationContainer>
  );
}

export default App;
