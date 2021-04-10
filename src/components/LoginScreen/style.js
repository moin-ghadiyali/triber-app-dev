import { StyleSheet, Dimensions } from 'react-native';

import ContentFont from '../Font';

export default style = StyleSheet.create({
    login: {
        flex: 1,
        flexDirection: 'column',
        position: "relative",
        margin: 0
    },
    backgroundImage: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: Dimensions.get('window').height,
    },
    back: {
        height: 30,
        width: 30,
        transform: [{rotate: '-180deg'}]
    },  
    login_title: {
        fontSize: 60,
        position: "relative",
        left: 25,
        top: 70,
        color: '#336DA8',
        fontFamily: ContentFont
    },
    login_form: {
        position: "relative",
        top: 130,
        alignItems: 'flex-end',
        height: 200
    },
    input: {
        // paddingTop: 20,
        // paddingBottom: 20,
        // paddingLeft: 10,
        // backgroundColor: '#cccccc',
        // borderBottomColor: '#fff',
        // borderBottomWidth: 2,
        width: 300,
        marginBottom: 40,
        fontSize: 17,
        color: '#fff',
        height: 70,
        fontFamily: ContentFont,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    login_button: {
        position: "absolute",
        top: 620,
        right: 50,
        height: 100,
        width: 100,
        borderRadius: 20,
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        transform: [{ rotate: '45deg' }],
        // borderWidth: 1,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrow_image: {
        alignContent: 'center',
        position: "relative",
        // top: 25,
        // left: 23,
        // width: 50,
        // height: 50,
        transform: [{ rotate: '-45deg' }]
    },
    buttons: {
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        textAlign: "left",
        backgroundColor: '#336DA8',
        alignSelf: 'flex-start',
        marginBottom: 10,
        marginTop: 25,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 7,
    }
})