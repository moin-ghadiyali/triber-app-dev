import { StyleSheet, Dimensions } from 'react-native';

import ContentFont from '../Font';

const postWidth = Dimensions.get('window').width/3

export default style = StyleSheet.create({
    profile: {
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
    header: {
        position: 'relative',
        // height: 60,
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: '#336DAB',
        // borderBottomWidth: 0.5,
        // borderColor: '#fff',
        alignItems: "center",
    },
    content: {
        position: 'relative',
        flex: 12,
        backgroundColor: '#ffffff',
    },
    back: {
        alignSelf: 'center',
        flex: 1,
        left: 10
    },
    edit: {
        flex: 1.2
    },
    setting: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 10
    },
    profileImage: {
        position: 'relative',
        height: 180,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    profilePic: {
        top: 12,
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 0.8
    },
    icon1: {
        flex: 1,
        alignItems: 'center'
    },
    icon2: {
        flex: 1,
        alignItems: 'center'
    },
    iconDetails: {
        top: -14,
        padding: 15,
        backgroundColor: '#336dab',
        borderRadius: 50,
        borderWidth: 0.8,
        borderColor: '#fff'
    },
    data: {
        flex: 1,
        height: 70,
        alignItems: 'center'
    },
    names: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        width: '100%',
        // transform: [{ translateX: -500 }]
    },
    data2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    data2Content: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    line: {
        top: 8,
        borderWidth: 1,
        borderColor: '#336dab',
        width: 30
    },
    bio: {
        padding: 20,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shortPostCards: {
        height: postWidth,
        width: postWidth,
        borderLeftWidth: 0.5,
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: '#fff',
        backgroundColor: '#fff',
    },
    followerModalHeader: {
        // flex: 1,
        // height: 60,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#336DAB',
        borderBottomWidth: 0.5,
        borderColor: '#fff',
    },
    searchBar: {
        // padding: 15,
        borderWidth: 0.7,
        borderColor: '#336dab',
        color: '#fff',
        borderRadius: 10
    },
    searchIcon: {
        position: 'absolute',
        top: 28,
        right: 23
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
        borderColor: '#336dab',
        borderRadius: 4,
        padding: 7,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    removeAlertBox: {
        width: '80%',
        // height: 250,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#336dab'
    },
    alertOptions: {
        flex: 1,
        padding: 15,
        borderTopWidth: 1,
        borderColor: '#336dab'
    },
     editButton: {
         borderRadius: 50,
         padding: 15,
         borderWidth: 0.8,
         borderColor: '#fff',
         backgroundColor: '#336dab',
         justifyContent: 'center',
         alignItems: 'center',
     }
})