import React, {useState} from "react";
import {ScrollView, View, Stylesheet} from "react-native";
import {Card, Button, Text, Avatar, Input, Header} from "react-native-elements";
import {AuthContext} from "../provider/AuthProvider";
import { color } from "react-native-reanimated";
import { AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';


const PostComponent = (props) => {
    console.log(props);
    return(
        <View>
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
                {props.name}
              </Text>
            </View>
            <Text style = {{ fontStyle : "italic"}}>
              Posted on {props.date}
            </Text>
            <Text
              style = {{
                paddingVertical : 10,
              }}
            >
              {props.post}

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
        </View>

    )
}
export default PostComponent;