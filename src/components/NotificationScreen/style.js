import { StyleSheet, Dimensions } from 'react-native';

import ContentFont from '../Font';

export default style = StyleSheet.create({
    notification: {
        flex: 1,
        flexDirection: 'column',
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
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#336DAB',
        borderBottomWidth: 1,
        borderColor: '#fff',
        alignItems: "center",
    },
    content: {
        position: 'relative',
        flex: 12,
        backgroundColor: '#ffffff',
    },

})