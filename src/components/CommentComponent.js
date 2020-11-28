import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Button, Text, Avatar, Input, Header } from "react-native-elements";
import {AuthContext} from "../provider/AuthProvider";
import {useNavigation} from "@react-navigation/native";

const CommentComponent = (props) => {
    return(
        
        <View>
            <Card containerStyle = {styles.cardviewStyle}>
                <View style = {{
                    flexDirection : "row",
                    justifyContent : "space-between",
                    alignItems : "center",
                }}>
                    <View
                        style = {{
                            flexDirection : "row",
                            alignItems : "center",
                        }}
                    >
                        <Avatar
                            containerStyle = {{ backgroundColor : "#a5d683"}}
                            rounded
                            icon = {{ name: "user", type: "font-awesome", color : "black"}}
                            activeOpacity = {1}
                        />
                        <Text> {props.name} </Text>
                    </View>
                    <Text> {props.date} </Text>
                </View>
                <Text style = {{paddingVertical : 10}}> 
                    {props.comment}
                </Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardviewStyle : {
        fontSize : 30,
        backgroundColor : "#ebe7da",
        alignSelf : "center",
        marginLeft : 10,
        marginRight : 10,
    },
});

export default CommentComponent;