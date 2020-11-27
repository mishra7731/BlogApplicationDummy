import React from "react";
import {useState} from "react";
import {StyleSheet, View, AsyncStorage} from "react-native";
import {Header, Text, Card, Avatar} from "react-native-elements";
import { AuthContext } from "../provider/AuthProvider";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';


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
                  <Card>
                      <View style = {{
                          flexDirection : "row",
                          alignItems : "center"
                      }}
                      >
                          <Avatar
                            containerStyle={{ backgroundColor: "#ffab91" }}
                            rounded
                            icon={{ name: "user", type: "font-awesome", color: "white" }}
                            activeOpacity={1}
                            />
                          <Text style = {{ paddingHorizontal : 10}}>
                              Pam liked your post

                          </Text>

                      </View>
                  </Card>
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