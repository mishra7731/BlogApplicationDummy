import React, {useState, useEffect} from "react";
import {ScrollView, View, StyleSheet, FlatList} from "react-native";
import {Card, Button, Text, Avatar, Input, Header} from "react-native-elements";
import {AuthContext} from "../provider/AuthProvider";
import CommentComponent from "../components/CommentComponent";
import {storeDataJSON, getDataJSON, removeData } from "../functions/AsnycStorageFunctions";
import moment from "moment";
import { FontAwesome5, FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const PostScreen = (props) => {

    const [commentText, setCommentText] = useState("");
    const [commentList, setCommentList] = useState([]);

    const getCommentData = async () => {
        await getDataJSON(props.route.params.post).then((data) => {
            if (data == null) {
                setCommentList([]);
            }
            else setCommentList (data);
        });
    };
    useEffect (() => {
        getCommentData();
    }, [])

    return (
       <AuthContext.Consumer>
           {(auth) => (
               <View>
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
                      centerComponent = {{text : "Blog Timeline", style: {color : "#ffffff"}}}
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
                                    {props.route.params.name}
                                </Text>
                            </View>
                            <Text style = 
                                {{ fontStyle : "italic"}}>
                                     Posted on {props.route.params.date}
                            </Text>
                            <Text
                                style = {{
                                paddingVertical : 10,
                                }}
                            >
                                {props.route.params.post}

                            </Text>
                            <Input
                                placeholder = "What's in your mind?"
                                multiline = {true}
                                leftIcon = 
                                    {<FontAwesome5 name="pen-fancy" size={24} color="black" />}
                                onChangeText = {function (currentInput) {
                                    setCommentText(currentInput);
                                }}
                            />
                            <Button
                                title = "Comment" 
                                buttonStyle = 
                                {{
                                 width : 80, 
                                 alignSelf : "flex-start"
                                }}
                                onPress = { async () => {
                                    let arr = [
                                    ...commentList,
                                    {
                                        name : auth.CurrentUser.name,
                                        email: auth.CurrentUser.email,
                                        date : moment().format("DD MMM, YYYY"),
                                        comment : commentText,
                                        key : commentText,

                                    },
                                ];
                   
                                await storeDataJSON(props.route.params.post, arr).then(() => {
                                    setCommentList(arr);
                                });
                            
                                }}
                            />
                       </Card>
                   </View>
                   <FlatList
                    data = {commentList}
                    renderItem = {commentItem => (
                        <CommentComponent
                            name = {commentItem.item.name}
                            date = {commentItem.item.date}
                            comment = {commentItem.item.comment}
                        />

                    )}
                   />
                 <Card.Divider/>
                   
               </View>
           )}
       </AuthContext.Consumer>
    )
}

export default PostScreen;