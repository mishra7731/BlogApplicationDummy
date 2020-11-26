import React, {useState} from "react";
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {AuthContext} from "../provider/AuthProvider";
import {
  Button,
  Card, 
  Text,
  Avator,
  Input,
  Header} from 'react-native-elements';
import { StatusBar } from "expo-status-bar";


const WelcomeScreen = (props)=>{
  return(
    <AuthContext.Consumer> 
      {(auth) => 
        (<View style = {styles.viewStyle}>
          <StatusBar
            hidden = {true}
            backgroundColor = "blue"
            barStyle = "light-content"
          />
          <Text style = {styles.TextStyle}>Welcome {auth.currentUser.name}</Text>

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
    viewStyle: {
      flex: 1, 
      justifyContent:"center",
      backgroundColor: "#4bacb8"
      
    },
    TextStyle:{
      fontSize: 25,
      color: "black",
    },
  } 

);
export default WelcomeScreen;