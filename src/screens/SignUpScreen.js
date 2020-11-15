import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Card} from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const SignUpScreen = (props)=>{
  return(
    <View style = {styles.viewStyle}>
    <Card>
      <Card.Title>Welcome to Auth App</Card.Title>
      <Card.Divider/>
      <Input
       leftIcon ={<FontAwesome5 name="user-edit" size={24} color="black" />}
       placeholder = 'Name'
      />

      <Input
       leftIcon ={<FontAwesome name="id-card-o" size={24} color="black" />}
       placeholder = 'Student ID'
      />


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
        icon = {<MaterialCommunityIcons name="account-plus" size={24} color="black" />}
        title = 'Sign Up'
        type = 'solid'
      />
      
     
      <Button
         type = 'clear'
         title = "Already have an account?"
         icon = {<MaterialCommunityIcons name="login" size={24} color="black"/>}
         onPress={function (){
           props.navigation.navigate("SignIn");
         }}
       />
    </Card>
   </View>
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

export default SignUpScreen;