import React, {useState} from "react";
import {ScrollView, View, StyleSheet} from "react-native";
import {Card, Button, Text, Avatar, Input, Header} from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import {AuthContext} from "../provider/AuthProvider";

const PostScreen = (props) => {
    return (
        <View>
            <FlatList
            data = {postList}
            renderItem = {postItem => (
              <PostComponent
                name = {postItem.item.name}
                date = {postItem.item.date}
                post = {postItem.item.post}
              />
            )}
          />
        </View>
    )
}

export default PostScreen;