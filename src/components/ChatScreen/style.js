import { StyleSheet, Dimensions } from 'react-native'

import ContentFont from '../Font';

export default style = StyleSheet.create({
    chat: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        width: '100%',
        // flex: 1,
        // height: 63,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#336dab',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    back: {
        alignSelf: 'center',
        flex: 1,
        left: 10
    },
    groupAdd: {
        flex: 1,
        alignSelf: 'center',
    },
    content: {
        flex: 12,
        height: '100%',
        backgroundColor: '#fff',
    },
    view: {
        flex: 1,
        // height: 70,
        // backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        // borderBottomWidth: 0.7,
        borderBottomColor: '#336dab',
        flexDirection: 'row',
        padding: 10,
        paddingBottom: 1,
    },
    searchIcon: {
        position: 'absolute',
        top: 22,
        right: 22
    },
    search: {
        width: '100%',
        // height: 50,
        // padding: 5,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: '#336dab',
        alignSelf: 'center',
        fontFamily: ContentFont,
        color: '#336dab',
    },
    userChats: {
        flex: 9,
        backgroundColor: '#fff'
    },
    card: {
        width: '100%',
        height: 80,
        padding: 15,
        // borderBottomWidth: 0.4,
        borderColor: '#336dab',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    profilePic: {
        flex: 1.5
    },
    pic: {
        width: 60,
        height: 60,
        borderRadius: 50,
        alignSelf: 'center',
    },
    info: {
        flex: 8,
        paddingLeft: 15,
        top: 2,
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingRight: 10
    },
    streak: {
        flex: 1.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    streakImage: {
        width: 15,
        height: 15,
        alignSelf: 'center',
        left: 2
    },
    modal: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
    },
    modalBox: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-end',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderColor: '#336dab',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        // height: 350,
        paddingTop: 10,
        backgroundColor: 'rgba(51,109,171,1)',
    },
    chatOptions: {
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    chatOptionsButton: {
        width: '100%',
        borderColor: '#fff',
        padding: 10
    },
    textInputBar: {
        // flex: 1,
        width: '98%',
        borderRadius: 40,
        borderColor: '#336dab',
        borderWidth: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        paddingBottom: 2,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    chatBubble: {
        width: 'auto',
        padding: 15,
        marginTop: 10,
        borderRadius: 20,
        borderBottomLeftRadius: 1,
        backgroundColor: '#336dab',
        color: '#fff',
        alignSelf: 'flex-start',
        textAlign: 'justify'
    },
    chatBubbleUser: {
        padding: 15,
        marginTop: 10,
        borderRadius: 20,
        borderBottomRightRadius: 1,
        backgroundColor: '#cccccc',
        color: '#336dab',
        alignSelf: 'flex-end',
        textAlign: 'justify'
    }
})