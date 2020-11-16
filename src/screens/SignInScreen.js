import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Card} from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {AuthContext} from "../provider/AuthProvider";
import {getDataJSON} from "../functions/AsnycStorageFunctions";

const SignInScreen = (props)=>{
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return(
    <AuthContext.Consumer>
      {(auth) => (<View style = {styles.viewStyle}>
        <Card>
          <Card.Title>Welcome to Auth App</Card.Title>
          <Card.Divider/>
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
            icon = {<MaterialCommunityIcons name="login" size={24} color="black" />}
            title = 'Sign In'
            type = 'solid'
            onPress = { async function ()           
              {
                let UserData = await getDataJSON(Email);   
                if(UserData.password == Password){   
                  auth.setIsLoggedIn(true);
                  auth.setCurrentUser(UserData);
                }
                else{
                  alert("Login Failed");
                  console.log(UserData); 
                }
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