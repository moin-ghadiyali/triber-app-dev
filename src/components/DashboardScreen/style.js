import { StyleSheet, Dimensions } from 'react-native'

import ContentFont from '../Font';

const postHeight = Dimensions.get('window').width;

export default style = StyleSheet.create({
    dashboard: {
        flex: 1,
        flexDirection: 'column',
        // height: Dimensions.get('window').height,
        margin: 0,
        width: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
    },
    add_post: {
        position: 'absolute',
        right: 15,
        bottom: 15,
        width: 65,
        height: 65,
        borderRadius: 50,
        borderColor: '#52C7C0',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderWidth: 2,
        justifyContent: 'center'
    },
    header: {
        position: 'relative',
        // flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        backgroundColor: '#336DAB',
        borderBottomWidth: 0.5,
        borderColor: '#fff',
        alignItems: "stretch",
    },
    content: {
        position: 'relative',
        flex: 12,
        backgroundColor: '#ffffff',
        // padding: 10
    },
    bottom_navigation: {
        position: "relative",
        width: '100%',
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
    },
    unit: {
        padding: 15,
        borderTopWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#52C7C0',
        flex: 4,
        alignItems: 'center',
    },
    person_logo: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 10,
    },
    person_logo_icon: {
        width: 35,
        height: 35,
        alignSelf: 'center',
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 1
    },
    username: {
        flex: 9,
        alignSelf: 'flex-start',
        color: '#fff',
        textAlign: 'left',
        paddingLeft: 10,
        fontSize: 25,
        fontFamily: ContentFont
    },
    message: {
        flex: 1,
        justifyContent: 'center',
        // paddingRight: 5,
    },
    message_icon: {
        position: 'relative',
        top: -2,
        transform: [{ rotate: '-45deg' }],
        alignSelf: 'center'
    },
    postCard: {
        position: 'relative',
        top: 10,
        width: '100%',
        // height: 500,
        // paddingLeft: 5,
        // paddingRight: 5,
        // borderWidth: 1,
        borderRadius: 2,
        marginBottom: 10,
        borderColor: '#52C7C0',
        flex: 1,
        flexDirection: 'column'
    },
    userData: {
        // flex: 2,
        flexDirection: "row",
        marginBottom: 10,
    },
    userDataChild: {
        flex: 9,
        flexDirection: 'row',
        left: 7
    },
    userDataOptions: {
        flex: 1,
        justifyContent: 'center',
    },
    profilePic: {
        height: 40,
        width: 40,
        alignItems: 'center',
        // padding: 5,
        // borderWidth: 1,
        borderRadius: 50,
        // borderColor: '#000000',
        flex: 1.2
    },
    image: {
        // flex: 6,
        width: '100%',
        flexDirection: 'column'
    },
    postImage: {
        width: '100%',
        height: postHeight,
        // transform: [{scale: 1.04}]
    },
    names: {
        flex: 9,
        flexDirection: "column",
        paddingLeft: 6,
        justifyContent: 'center'
    },
    name: {
        fontSize: 15,
        color: '#000',
        fontFamily: ContentFont,
        fontWeight: '500'
    },
    usernameNew: {
        fontSize: 10,
        color: '#000',
        fontFamily: ContentFont,
    },
    postOptions: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
        alignItems: 'center'
    },
    superLike: {
        position: 'relative',
        marginLeft: 10
    },
    like: {
        position: 'relative',
        marginLeft: 15,
    },
    comment: {
        // width: 40,
        // height: 40,
        position: 'relative',
        marginLeft: 20,
    },
    share: {
        position: 'relative',
        marginLeft: 20,
        // transform: [{rotate: '15deg'}]
    },
    save: {
        position: 'absolute',
        right: 10
    },
    caption: {
        position: 'relative',
        top: 7,
        marginLeft: 15,
        marginRight: 10,
        marginBottom: 15,
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
        height: '80%',
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
        padding: 10,
        backgroundColor: 'rgba(51,109,171,0.9)',
    },
    search: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    textSearch: {
        width: '100%',
        padding: 10,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#fff',
        color: '#fff',
        borderWidth: 0.5
    },
    shareUser: {

    },
    userInfo: {
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    followPicView: {
        flex: 2,
        alignItems: 'center',
        padding: 5
    },
    followPic: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignSelf: 'center'
    },
    userInfoNames: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    followButtonView: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        right: 5
    },
    followButton: {
        width: 100,
        borderWidth: 0.7,
        borderColor: '#fff',
        borderRadius: 4,
        padding: 7,
        backgroundColor: '#336dab',
        alignItems: 'center',
        justifyContent: 'center'
    },
})