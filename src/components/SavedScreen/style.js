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
        top: 70
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
    header: {
        width: '100%',
        // flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOpacity: 0.9,
        shadowRadius: 1,
        shadowOffset: {width: 0, height: 10},
        elevation: 5,
      },
      back: {
        alignSelf: 'center',
        flex: 1,
        left: 10,
      },
      content: {
        flex: 12,
        height: '100%',
        backgroundColor: '#fff',
        flexDirection: 'column',
      },
})