import { StyleSheet } from 'react-native';

import ContentFont from '../Font';

export default style = StyleSheet.create({
    otp: {
        flex: 1,
        flexDirection: 'column',
        position: "relative",
        margin: 0
    },
    _title: {
        fontSize: 60,
        position: "relative",
        left: 25,
        top: 70,
        color: '#336DAB'
    },
    form: {
        position: 'relative',
        top: 150
    },
    gridPad: {
        padding: 30
    },
    txtMargin: {
        margin: 3
    },
    inputRadius: {
        textAlign: 'center'
    },
    signup_button: {
        position: "absolute",
        top: 620,
        right: 50,
        height: 100,
        width: 100,
        borderRadius: 20,
        borderColor: '#000000',
        backgroundColor: '#336dab',
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
})