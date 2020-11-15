import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Card} from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {AuthContext} from "../provider/AuthProvider";

const SignInScreen = (props)=>{
  return(
    <AuthContext.Consumer>
      {(auth) => (<View style = {styles.viewStyle}>
        <Card>
          <Card.Title>Welcome to Auth App</Card.Title>
          <Card.Divider/>
          <Input
            leftIcon ={<FontAwesome5 name="envelope-open-text" size={24} color="black" />}
            placeholder = 'E-mail Address'
          />

          <Input
            placeholder = 'Password'
            secureTextEntry = {true}
            leftIcon ={<MaterialCommunityIcons name="account-key" size={24} color="black" />}
          />

          <Button
            icon = {<MaterialCommunityIcons name="login" size={24} color="black" />}
            title = 'Sign In'
            type = 'solid'
            onPress = {function ()
              {
                auth.setIsLoggedIn(true);
                console.log("button clicked")
              }
            }
          />
       
      
          <Button
            type = 'clear'
            title = "Don't have an account?"
            icon = {<MaterialCommunityIcons name="account-plus" size={24} color="black"/>}
            onPress={function (){
              props.navigation.navigate("SignUp");
            }}
          />
        </Card>
      </View>)}
    </AuthContext.Consumer>
    
  );
}

const styles = StyleSheet.create(
  {
    viewStyle:{
      flex: 1, //major axis er direction e extend korte pari
      justifyContent:"center",
      backgroundColor: "#4bacb8"
    }
  } 

);
export default SignInScreen;