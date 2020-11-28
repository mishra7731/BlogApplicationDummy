import React, {useState} from "react";
import {ScrollView, View, StyleSheet } from "react-native";
import {Card, Button, text, Avatar, Input, Header} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';


const NotificationComponent = (props) => {
    const useStackNavigation = useNavigation();
    return (
        <View>
            <Button
                type = "clear"
                icon = {<FontAwesome5 name="comment-dots" size={24} color="black" />}
                title = {props.notification}
                titleStyle = {{color : "blue"}}
                onPress = {function () {
                    useStackNavigation.navigate("IndividualPost", {
                        post : props.post,
                        name : props.name,
                        date : props.date, 
                        email: props.email
                    })
                }}
            />
        </View>
    )
};

export default NotificationComponent;