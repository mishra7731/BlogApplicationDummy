import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Card} from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {storeDataJSON} from '../functions/AsnycStorageFunctions';

const SignUpScreen = (props)=>{
  const [Name, setName] = useState("");
  const [SID, setSID] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


  return(
    <View style = {styles.viewStyle}>
    <Card>
      <Card.Title>Welcome to Auth App</Card.Title>
      <Card.Divider/>
      <Input
       leftIcon ={<FontAwesome5 name="user-edit" size={24} color="black" />}
       placeholder = 'Name'
       onChangeText = {function(currentInput){
         setName(currentInput);
       
       }}
      />

      <Input
       leftIcon ={<FontAwesome name="id-card-o" size={24} color="black" />}
       placeholder = 'Student ID'
       onChangeText = {function(currentInput){
        setSID(currentInput);
      
       }}
      />


      <Input
       leftIcon ={<FontAwesome5 name="envelope-open-text" size={24} color="black" />}
       placeholder = 'E-mail Address'
       onChangeText = {function(currentInput){
        setEmail(currentInput);
      
       }}
      />

      <Input
       placeholder = 'Password'
       secureTextEntry = {true}
       leftIcon ={<MaterialCommunityIcons name="account-key" size={24} color="black" />}
       onChangeText = {function(currentInput){
        setPassword(currentInput);
      
       }}
      />

      <Button
        icon = {<MaterialCommunityIcons name="account-plus" size={24} color="black" />}
        title = 'Sign Up'
        type = 'solid'
        onPress = {function(){
          let currentUser = {
            name: Name,
            sid: SID,
            email: Email,
            password: Password,
          };
          storeDataJSON(Email, currentUser);
          props.navigation.navigate("SignIn");
        }}
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
      flex: 1, 
      justifyContent:"center",
      backgroundColor: "#4bacb8"
    } 
  }
);

export default SignUpScreen;