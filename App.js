import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import NotificationScreen from "./src/screens/NotificationScreen";
import {AuthContext, AuthProvider} from "./src/provider/AuthProvider";

const WelcomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const WelcomeStackScreen = () => { 
  return(
    <WelcomeStack.Navigator initialRouteName = 'Welcome'>
      <WelcomeStack.Screen name = 'Welcome' component = {WelcomeScreen}/>
    </WelcomeStack.Navigator>
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
          {auth.IsLoggedIn ? <WelcomeStackScreen /> : <AuthStackScreen />}
        </NavigationContainer>)}
      </AuthContext.Consumer> 
    </AuthProvider>
    
  );
}

export default App;
