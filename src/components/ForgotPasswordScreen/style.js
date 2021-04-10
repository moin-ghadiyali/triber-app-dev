import { StyleSheet } from 'react-native';

import ContentFont from '../Font';

export default style = StyleSheet.create({
    otp: {
        flex: 1,
        flexDirection: 'column',
        position: "relative",
        margin: 0
    },
    back: {
        height: 30,
        width: 30,
        transform: [{rotate: '-180deg'}]
    },
    _title: {
        fontSize: 60,
        position: "relative",
        left: 25,
        top: 60,
        color: '#336DAB'
    },
    form: {
        position: 'relative',
        top: 150,
        paddingLeft: 25,
        paddingRight: 25
    },
    input: {
        position: "relative",
        top: 0,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        width: '100%',
        marginBottom: 10,
        fontSize: 17,
        color: '#000000',
        height: 70
    },
    search: {
        position: "absolute",
        top: 420,
        alignSelf: 'center',
        width: 120,
        height: 120,
        borderRadius: 100,
        // borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#336DAB',
        padding: 15,        
        shadowColor: '#000000',
        shadowOffset: { width: 10, height: 25 },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 13,
    },
    search_logo: {
        alignContent: 'center',
        position: "relative",
        top: 20,
        left: 27,
        width: 50,
        height: 50,
    }
})