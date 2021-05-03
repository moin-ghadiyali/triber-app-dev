import { StyleSheet, Dimensions } from 'react-native'

import ContentFont, { customFontRegular } from '../Font';

export default style = StyleSheet.create({
    signup: {
        flex: 1,
        flexDirection: 'column',
        position: "relative",
        margin: 0,
        height: Dimensions.get('window').height,
        width: '100%'
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
    signup_title: {
        fontSize: 60,
        position: "relative",
        left: 25,
        top: 60,
        color: '#336DAB',
        fontFamily: customFontRegular
    },
    form: {
        position: 'relative',
        top: 190,
        left: 5
    },
    input: {
        position: "relative",
        top: 0,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        width: 300,
        marginBottom: 10,
        marginLeft: 25,
        fontSize: 17,
        color: '#fff',
        height: 70,
        fontFamily: customFontRegular
    },
    signup_button: {
        position: "absolute",
        top: 620,
        right: 50,
        height: 100,
        width: 100,
        borderRadius: 20,
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        transform: [{ rotate: '45deg' }],
        // borderWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrow_image: {
        alignContent: 'center',
        position: "relative",
        transform: [{ rotate: '-45deg' }]
    },
    login_button: {
        position: "absolute",
        top: 590,
        left: 50,
        height: 100,
        width: 100,
        borderRadius: 20,
        borderColor: '#000000',
        backgroundColor: '#5BC7A0',
        transform: [{ rotate: '45deg' }],
        borderWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    login: {
        position: 'absolute',
        bottom: -10
    }
})