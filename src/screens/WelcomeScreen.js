import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import {AuthContext} from "../provider/AuthProvider";
import {Button} from 'react-native-elements';


const WelcomeScreen = ()=>{
  return(
    <AuthContext.Consumer> 
      {(auth) => 
        (<View>
          <Text>Welcome</Text>

          <Button
            type = "solid"
            title = "Log Out"
            onPress = {function(){
               auth.setIsLoggedIn(false);
               auth.setCurrentUser({});
            
            }}
          />
        </View>)}
    </AuthContext.Consumer>
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