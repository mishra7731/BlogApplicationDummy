import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';

import {AuthContext, AuthProvider} from "./src/provider/AuthProvider";

const WelcomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const WelcomeStackScreen = () => { //alada rakhar karon hocche ei function ta ei midule er navigation return korbe
  return(
    <WelcomeStack.Navigator initialRouteName = 'Home'>
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
    <AuthProvider> {/* pura navigation container is a child of auth provider */}
      <AuthContext.Consumer>
        {(auth) => (
        <NavigationContainer> {/*auth is basically value property r object (oije 4 ta value) */}
          {auth.IsLoggedIn ? <WelcomeStackScreen /> : <AuthStackScreen />}
        </NavigationContainer>)}
      </AuthContext.Consumer> {/* karon app.js ba navigation nije e consumer, ok e is logged in ta check kora lagtece tai itself is a consumer */ }
    </AuthProvider>
    
  );
}

export default App;
