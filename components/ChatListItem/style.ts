import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    userImage: {
        height: 50,
        width: 60,
        marginRight: 10,
        borderRadius: 50
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around',

    },
    username: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey'
    },
    createdTime: {
        fontSize: 16,
        color: 'grey'
    }
});

export default styles;