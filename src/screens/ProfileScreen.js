import React, {useState} from "react";
import {View , StyleSheet, AsyncStorage} from "react-native";
import {Text, Card, Button, Avatar, Header} from "react-native-elements";
import {AuthContext} from "../provider/AuthProvider";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


const ProfileScreen = (props) => {
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
                            containerStyle = {{
                                backgroundColor : "cyan"
                            }}
                            rounded icon = {{
                                name: "thumbs-o-up" , type : "font-awesome", color: "black",
                            }}
                            activeOpacity = {1}
                          />
                          <Text style = {{ paddingHorizontal : 10}}>
                              {auth.CurrentUser.name} Liked Your Post

                          </Text>
                      </View>
                  </Card>
                </View>
            )}
        </AuthContext.Consumer>
    )
}

export default ProfileScreen