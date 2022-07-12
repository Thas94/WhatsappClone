import { StyleSheet, View, Text, FlatList  } from 'react-native';
import ChatListItem from '../components/ChatListItem/Index';
import ChatRooms from '../data/ChatRoom';

const ChatsScreen = () => {
    return (
        <View style={styles.container }>
            <FlatList
                data={ChatRooms}
                renderItem={({item}) => <ChatListItem chatRoom={item}/>} 
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
})

export default  ChatsScreen;