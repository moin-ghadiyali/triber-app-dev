import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ForgotPassword extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <View style={style.otp}>
                <TouchableOpacity style={{position: 'absolute', top: 0, left: 0, padding: 15}} onPress={() => this.props.navigation.pop()}>
                        <Image style={style.back} source={require('./images/logo.png')} />
                    </TouchableOpacity>
                    <Text style={style._title}>Forgot Password</Text>
                    <View style={style.form}>
                        <TextInput placeholder="Username or Phone or Email" style={style.input} />
                    </View>
                    <TouchableOpacity style={style.search}>
                    {/* <Image style={style.search_logo} source={require('./images/search.png')} /> */}
                    <Icon style={style.search_logo} name='md-search' size={50} color='#fff' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}