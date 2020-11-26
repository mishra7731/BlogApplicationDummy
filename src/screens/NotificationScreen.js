import React from "react";
import {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Header} from "react-native-elements";
import { AuthContext } from "../provider/AuthProvider";


const NotificationScreen = (props) => {
    return (
       <AuthContext.Consumer>
           {(auth) =>
           (
               <View>
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
               </View>

           )}

       </AuthContext.Consumer>
    );

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
    },
    TextStyle : {
        fontSize : 25,
        color : "blue",
    },

});

export default NotificationScreen;