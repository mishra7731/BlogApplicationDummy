import React from "react";
import {View, Button, StyleSheet, Text} from 'react-native';

const WelcomeScreen = ()=>{
  return(
    <View>
      <Text>Welcome to Home!</Text>
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
export default WelcomeScreen;