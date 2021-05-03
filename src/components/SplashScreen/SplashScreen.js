import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import style from './style';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./images/background2.jpg')} style={{ width: '100%', height: '100%' }}>
        <SafeAreaView>
          <View style={style.splashscreen}>
            <View style={style.triber_view}>
              <Text style={style.triber_text}>GOZZBY</Text>
            </View>
            <View style={style.quote}>
              <Text style={style.quote_text}>“Focus on how to be social,{"\n"} not on how to do social.” </Text>
            </View>
            <View style={style.create_account_view}>
              <TouchableOpacity style={style.create_account} onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={style.create_account_text}>Create Account</Text>
              </TouchableOpacity>
            </View>
            <View style={style.login_view}>
              <Text style={style.t1}>Already have an account?</Text>
              <TouchableOpacity style={style.login_button} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={style.login_text}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}