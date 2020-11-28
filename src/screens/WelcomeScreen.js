import React, {useState, useEffect} from "react";
import {ScrollView, View, StyleSheet, FlatList} from 'react-native';
import {AuthContext} from "../provider/AuthProvider";
import { Button, Card, Avatar, Text, Input, Header} from 'react-native-elements';
import { StatusBar } from "expo-status-bar";
import { FontAwesome5, FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
 
import { storeDataJSON, getDataJSON, removeData} from "../functions/AsnycStorageFunctions";


import PostComponent from "../components/PostComponent";
import moment from "moment";

const WelcomeScreen = (props)=>{
  const [postText, setPostText] = useState("");
  const [postList, setPostList] = useState([]);

  const getData = async () => {
    await getDataJSON ("posts").then ((data) => {
      if (data == null) {
        setPostList ([]);
  
      }
      else{
        setPostList(data);
      }
    });
    
  };

  useEffect (() => {
    getData();

  }, [])
  
  return(
    <AuthContext.Consumer> 
      {(auth) => 
        (<View>
        <ScrollView> 
          <StatusBar />
          <Header
            containerStyle = {{
              backgroundColor : "#939fcf",
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
              onChangeText = {function (currentInput) {
                setPostText (currentInput);
              }
              
              }
            />

            <Button
             title = "Post" buttonStyle = {{width : 80, alignSelf : "flex-start"}}
             onPress = { async () => {
               let arr = [
                 ...postList,
                 {
                  name : auth.CurrentUser.name,
                  email: auth.CurrentUser.email,
                  date : moment().format("DD MMM, YYYY"),
                  post : postText,
                  key : postText,

                 },
               ];
                   
               await storeDataJSON('posts', arr).then(() => {
                setPostList(arr);
               });
                            
             }}
            />
   
          </Card>
          <FlatList
            data = {postList}
            renderItem = {postItem => (
              <PostComponent
                name = {postItem.item.name}
                date = {postItem.item.date}
                post = {postItem.item.post}
              />
            )}
          />
          </ScrollView>
        </View>
        )}
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