import React, {useState} from "react";
import {View , StyleSheet, Image, ScrollView} from "react-native";
import {Text, Card, Button, Avatar, Header} from "react-native-elements";
import {AuthContext} from "../provider/AuthProvider";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


const ProfileScreen = (props) => {
    
    return (
        <AuthContext.Consumer>
            {(auth) => 
            (
                <View style = {styles.viewStyle1}>
                   <Header
                     containerStyle = {{
                     backgroundColor : "#939fcf",
                    }}
                    leftComponent = {
                     <AntDesign name="menuunfold" size={24} color="white" 
                       onPress = {() => {
                        props.navigation.openDrawer();
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

                  <View>
                     <Image source = {require('../../assets/PP.png')} style = {styles.dpStyle}/>
                     <Text style = {styles.textStyle1}> {auth.CurrentUser.name} </Text> 
                  </View>
                  
                  <Button buttonStyle = {{
                      backgroundColor : "blue",
                      marginTop : 40, 
                      marginLeft : 20,
                      width: 200,
                      borderRadius : 10
                    }} 
                    icon = {<MaterialCommunityIcons name="delete-empty" size={24} color="white" />}
                    title = "Delete Profile"
                    type = "solid"
                  />

                  <View style = {styles.viewStyle}>
                      <Text style = {styles.textStyle2}>Born On : 3rd march, 1998</Text>
                      <Text style = {styles.textStyle2}>Lives in : Dhaka, Bangladesh</Text>
                      <Text style = {styles.textStyle2}>Studies at : Software Engineering, IUT, OIC</Text>
                  </View>

                  
                </View> 
            )}
        </AuthContext.Consumer>
    )
}

const styles = StyleSheet.create(
    {
        dpStyle :{
            alignItems : "center",
            alignContent : "center",
            alignSelf : "center",
            height : 300,
            width : 200,
            marginBottom : -20,
            borderRadius : 500,
        },

        textStyle1 :{
            fontSize : 30,
            marginBottom : -20,
            marginTop : 20,
            paddingLeft : 30,
            color : "blue",
            alignItems : "center",
        },

        viewStyle :{
            alignItems : "center",
            justifyContent : "center",
            fontSize : 15, 
            color : "white",
            width : 300,
            paddingVertical : 10,
            paddingHorizontal : 20,
            backgroundColor : "#facdf8",
            marginHorizontal : 50,
            marginTop : 50

        },

        textStyle2 : {
            alignItems : "center",
            justifyContent: "center",
            paddingHorizontal : 20,
            paddingVertical : 10,
            fontSize : 15, 
            color : "red",
            width : 300,

        },
        viewStyle1 : {
            flex : 1,
            alignItems : "center",
            alignSelf : "center",
            backgroundColor : "#ecf7cd",

        },

    }
)

export default ProfileScreen;