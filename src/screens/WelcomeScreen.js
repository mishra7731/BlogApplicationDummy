import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import {AuthContext} from "../provider/AuthProvider";
import {Button} from 'react-native-elements';


const WelcomeScreen = ()=>{
  return(
    <AuthContext> 
      {(auth) => 
        (<View>
          <Text>Welcome to Home!</Text>

          <Button
            type = "solid"
            title = "Log Out"
            onPress = {function(){
               auth.setIsLoggedIn(false);
            
            }}
          />
        </View>)}
    </AuthContext>
  );
}

const styles = StyleSheet.create(
  {
    textStyle: {
      fontSize: 30,
      color: "blue",
    }
  } 

);
export default WelcomeScreen;