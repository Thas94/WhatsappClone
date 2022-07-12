import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChildListItem = (props: ChatListItemProps) => {

    const {chatRoom} = props;
    const user = chatRoom.users[1];

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{uri: user.imageUri}} style={styles.userImage} />
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text> 
                </View>
            </View>
 
            <Text style={styles.createdTime}>Yesterday</Text>
            {/*<Text>{chatRoom.lastMessage.createdAt}</Text>*/}
        </View>
    )
}

export default ChildListItem; 