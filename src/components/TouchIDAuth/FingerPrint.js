import React, { Component } from 'react';
import {
    AlertIOS,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Alert,
} from 'react-native';

import TouchID from "react-native-touch-id";

export default class FingerPrint extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            biometryType: null
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.authenticate = this.authenticate.bind(this);
        this.navigateScreen = this.navigateScreen.bind(this);

    }

    optionalConfigObject = {
        title: "Auth Required", // Android
        color: "#336dab", // Android,
        fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
    }

    componentDidMount() {
        TouchID.isSupported()
            .then(biometryType => {
                this.setState({ biometryType });
            })
    }

    clickHandler() {
        TouchID.isSupported()
            .then(this.authenticate())
            .catch(error => {
                Alert.alert('Touch ID not Valid')
            });
    }

    authenticate() {
        return TouchID.authenticate('Demo', this.optionalConfigObject)
            .then(success => {
                this.navigateScreen();
            })
            .catch(error => {
                console.log(error)
                Alert.alert(error.message);
            });
    }

    navigateScreen() {
        this.props.navigation.navigate('SplashScreen');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.btn}
                    onPress={this.clickHandler}
                    underlayColor="#0380BE"
                    activeOpacity={1}
                >
                    <Text style={{
                        color: '#fff',
                        fontWeight: '600'
                    }}>
                        {`Authenticate with ${this.state.biometryType}`}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    btn: {
        borderRadius: 3,
        marginTop: 200,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#0391D7'
    }
});