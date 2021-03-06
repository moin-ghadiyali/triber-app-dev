import { StyleSheet, Dimensions } from 'react-native'

import ContentFont from '../Font';

export default style = StyleSheet.create({
    editScreen: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        width: '100%',
        // flex: 1,
        height: 63,
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
    content: {
        flex: 12,
        height: '100%',
        backgroundColor: '#fff',
    },
    editProfileImage: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 170,
        height: 170,
        borderRadius: 100,
    },
    form: {
        flexDirection: 'column',
    },
    input: {
        color: '#fff',
        backgroundColor: '#fff',
        justifyContent: 'center',
        left: -3,
        width: '80%',
        flex: 8,
        lineHeight: 10
    },
    editView: {
        marginBottom: 5,
        flexDirection: "row",
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    editView2: {
        marginTop: 10,
        flexDirection: "row",
        width: '90%',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderWidth: 0.8,
        borderColor: '#336dab',
        padding: 5,
    }
})