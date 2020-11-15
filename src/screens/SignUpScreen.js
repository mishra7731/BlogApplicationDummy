import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Card} from "react-native-elements";


const SignUpScreen = (props)=>{
  return(
    <View>
      <Text>Welcome to SignUp Screen!</Text>
      <Button
          title = 'Sign In'
          onPress = {function (){
              props.navigation.navigate('SignIn');
          }
          }
      />
    </View>
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
export default SignUpScreen;