import { StyleSheet } from 'react-native'

import ContentFont, { customFontRegular } from '../Font';

export default style = StyleSheet.create({
    splashscreen: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "stretch",
        position: "relative",
        margin: 0,
    },
    triber_view: {
        position: "relative",
        top: 300,
        left: 20
    },
    triber_text: {
        fontSize: 70,
        fontFamily: customFontRegular,
        color: '#ffffff'
    },
    quote: {
        position: "relative",
        top: 445,
        left: 20
    },
    quote_text: {
        fontSize: 18,
        textAlign: "left",
        lineHeight: 40,
        color: '#ffffff',
        fontFamily: customFontRegular
    },
    create_account_view: {
        position: "relative",
        top: 600,
        width: 350,
        height: 120
    },
    create_account: {
        padding: 15,
        backgroundColor: '#ffffff',
        width: 250,
        borderTopEndRadius: 50,
        borderBottomEndRadius: 50,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    create_account_text: {
        position: "relative",
        fontSize: 20,
        color: '#336DAB',
        fontFamily: customFontRegular
    },
    login_view: {
        position: "absolute",
        right: 0,
        top: 690
    },
    t1: {
        fontSize: 16,
        textAlign: "right",
        position: "relative",
        right: 5,
        bottom: 5,
        color: '#336DAB',
        fontFamily: customFontRegular
    },
    login_button: {
        padding: 15,
        backgroundColor: '#336DAB',
        width: 250,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    login_text: {
        fontSize: 20,
        color: '#ffffff',
        fontFamily: customFontRegular
    }
})