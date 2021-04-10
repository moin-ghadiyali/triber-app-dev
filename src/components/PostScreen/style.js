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
        flexDirection: 'column'
    },
    editProfileImage: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width,
    },
    form: {
        flexDirection: 'column',
    },
    input: {
        color: '#336dab',
        justifyContent: 'center',
        lineHeight: 10,
        left: 5,
        padding: 10,
        fontSize: 16
    },
    editView: {
        marginTop: 10,
        flexDirection: "row",
        width: '90%',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#336dab',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderWidth: 0.8,
        borderColor: '#336dab',
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