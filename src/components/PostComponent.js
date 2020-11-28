import React, {useState, useEffect} from "react";
import {ScrollView, View, Stylesheet} from "react-native";
import {Card, Button, Text, Avatar} from "react-native-elements";
import {AuthContext} from "../provider/AuthProvider";
import { AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {getDataJSON} from "../functions/AsnycStorageFunctions";

const PostComponent = (props) => {
    const useStackNavigation = useNavigation();
    const [commentList, setCommentList] = useState([]);

    const getCommentData = async () => {
        await getDataJSON (props.post).then((data) => {
            if (data == null) {
                setCommentList ([]);
            }
            else{
                setCommentList(data);
            }
        });
    };
    getCommentData();
    let noOfComments = "";
    noOfComments = "Comment(".concat(commentList.length.toString()).concat(")");
    
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
                    size = "medium"
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
                  title = {noOfComments}
                  titleStyle = {{ color : "#5142b3"}} 
                  onPress = {function (){
                    useStackNavigation.navigate("IndividualPost", 
                        {post : props.post,
                         name : props.name,
                         date: props.date 
                        }
                    );
                  }}  
                />
            </View>
          </Card>
        </View>

    )
}
export default PostComponent;