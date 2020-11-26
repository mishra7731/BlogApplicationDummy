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
import { FontAwesome5 } from '@expo/vector-icons';
import { storeDataJSON } from "../functions/AsnycStorageFunctions";
import { color } from "react-native-reanimated";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


const [post, setPost] = useState([]);
const [user, setUser] = useState([]);

function ShowCurrentDate() {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  return (date + "/" + month + "/" + year);
}

const PostWriting = ({user}) => {
  return (
    <Card>
      <Input
        placeholder = "What's in your mind?"
        multiline = {true}
        leftIcon = 
         {<FontAwesome5 name="pen-fancy" size={24} color="black" />}
        onChangeText = { (text) => {
          setPost(text);
        }

        }
      />

      <View>
        <Button
          title = "Post" buttonStyle = {{width : 80, alignSelf : "flex-start"}}
          onPress = {() => {
            let newPost = {
              post : post,
              user : user.name,
              date : ShowCurrentDate()
            }
            storeDataJSON(Email, newPost);
          }}
        />
        <Button style = {styles.buttonStyle}
          disabled = {true}
          type = "outline"
          
        />

      </View>
    </Card>
  )
}


const WelcomeScreen = ({navigation})=>{
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
                  navigation.openDrawer();
               }}/>
            }
            centerComponent = {{text : "Home", style: {color : "#ffffff"}}}
            rightComponent = 
            {
              <MaterialCommunityIcons name="logout-variant" size={24} color="white" 
              onPress = {function(){
                auth.setIsLoggedIn(false);
                auth.setCurrentUser({});
             
              }}
              />
            }
          />
         
          <Text style = {styles.TextStyle}>Welcome {auth.currentUser.name}</Text>

          <PostWriting user = {auth.currentUser} />
            
          
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