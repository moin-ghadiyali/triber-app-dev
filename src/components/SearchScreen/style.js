import { StyleSheet, Dimensions } from 'react-native';

import ContentFont from '../Font';

export default style = StyleSheet.create({
    search: {
        flex: 1,
        flexDirection: 'column',
        width: '100%'
    },
    searchIcon: {
        position: 'relative',
        flex: 1,
        paddingLeft: 5,
        backgroundColor: '#fff',
        alignContent: 'stretch',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    searchBar: {
        flex: 9,
        position: 'relative',
        width: '100%',
        paddingLeft: 10,
        padding: 20,
        backgroundColor: '#fff',
        height: 60,
        color: '#666',
        fontFamily: ContentFont,
        zIndex: 100,
    },
    tobNavBar: {
        top: 100
    },
    searchedUser: {
        width: '100%',
        // padding: 30,
        height: 70,
        borderColor: '#336dab',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    pic: {
        flex: 2,
        alignItems: 'center',
        alignContent: 'center'
    },
    profileImage: {
        height: 45,
        width: 45,
        borderRadius: 50,
        alignSelf: 'center'
    },
    searchText: {
        flex: 8,
        flexDirection: 'column'
    }
})