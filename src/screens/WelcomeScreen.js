import React, {useState} from "react";
import {ScrollView, View, StyleSheet} from 'react-native';
import {AuthContext} from "../provider/AuthProvider";
import {
  Button,
  Card, 
  Avatar,
  Text,
  Input,
  Header} from 'react-native-elements';
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { storeDataJSON } from "../functions/AsnycStorageFunctions";
import { color } from "react-native-reanimated";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


const WelcomeScreen = (props)=>{

  let postWriting = 
  "AMR NAM TRUCK!";
  return(
    <AuthContext.Consumer> 
      {(auth) => 
        (<View>
          <StatusBar />
          <Header
            containerStyle = {{
              backgroundColor : "#939fcf",
              justifyContent : "space-around",
            }}
            leftComponent = {
              <AntDesign name="menuunfold" size={24} color="white" 
               onPress = {() => {
                  props.navigation.toggleDrawer();
               }}/>
            }
            centerComponent = {{text : "Home", style: {color : "#ffffff"}}}
            rightComponent = 
            {
              <MaterialCommunityIcons name="logout-variant" size={24} color="white" 
               onPress = {() => {
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
             
               }}
              />
            }
          />

          <Card>
          
            <Input
              placeholder = "What's in your mind?"
              multiline = {true}
              leftIcon = 
              {<FontAwesome5 name="pen-fancy" size={24} color="black" />}
              onPress = { function () {}}
            />

            <Button
             title = "Post" buttonStyle = {{width : 80, alignSelf : "flex-start"}}
             onPress = {function () {}}
            />
   
          </Card>

          <Card>
            <View 
              style = {{
                flexDirection: "row-reverse",
                alignItems: "center",
              }}
            >
               <Avatar
                  containerStyle={{ backgroundColor: "#ffab91" }}
                  rounded
                  icon={{ name: "user", type: "font-awesome", color: "white" }}
                  activeOpacity={1}
                />
              
              <Text h4Style = {{ padding : 10 }} h4>
                Jim Halpert
              </Text>
            </View>
            <Text style = {{ fontStyle : "italic"}}>
              Posted on 27 Nov, 2020
            </Text>
            <Text
              style = {{
                paddingVertical : 10,
              }}
            >
              AMI ONEK VALO!

            </Text>
            <Card.Divider />
            <View
              style = {{
                flexDirection : "row-reverse",
                justifyContent : "space-between"
              }}
            >
              <Button
                type = "outline"
                title = "Like (21)"
                icon = {<AntDesign name="like2" size={24} color="dodgerblue" />}
              />
              <Button
                type = "solid"
                title = "Comment (7)" />
            </View>
          </Card>
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
    buttonStyle : {
      width : 100,
      alignSelf : "flex-end",
      color : "blue",    
    }
  } 

);
export default WelcomeScreen;