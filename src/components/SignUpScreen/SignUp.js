import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-navigation-stack';
import {IP} from '../constants';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      phone: '',
      fullname: '',
    };
  }

  async signup() {
    if (this.state.username !== '' && this.state.password !== '') {
      // console.log(this.state);
      // await fetch(`${IP}/v1/auth`, {
      //   body: JSON.stringify({
          // username: this.state.username,
          // password: this.state.password,
          // fullname: this.state.fullname,
          // phone: this.state.phone,
      //   }),
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   method: 'POST',
      // })
      //   .then((response) => response.json())
      //   .then((response) => {
      //     if (response.responseCode == 2000) {
      // this.props.navigation.navigate('BottomNavigator', {
      //   token: response.token,
      //   user: response.user
      // });
      //       await AsyncStorage.setItem('token', response.token);
      //     } else if(response.responseCode == 2001) {
      //       alert(`${response.message}`);
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      this.props.navigation.navigate('OTP', {
        username: this.state.username,
        password: this.state.password,
        fullname: this.state.fullname,
        phone: this.state.phone,
      });
    } else {
      alert('Please Enter Your Credentials Properly!');
    }
  }
  render() {
    return (
      <ImageBackground
        source={require('./images/background.jpg')}
        style={style.backgroundImage}>
        <SafeAreaView>
          <View style={style.signup}>
            <TouchableOpacity
              style={{position: 'absolute', top: 0, left: 0, padding: 15}}
              onPress={() => this.props.navigation.pop()}>
              <Image style={style.back} source={require('./images/logo.png')} />
            </TouchableOpacity>
            <Text style={style.signup_title}>Create Account</Text>
            <View style={style.form}>
              {/* <KeyboardAvoidingView behavior="padding"> */}
              <TextInput
                placeholder="Username"
                placeholderTextColor="#fff"
                style={style.input}
                onChange={(e) => this.setState({username: e.nativeEvent.text})}
              />
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#fff"
                style={style.input}
                onChange={(e) => this.setState({fullname: e.nativeEvent.text})}
              />
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor="#fff"
                style={style.input}
                onChange={(e) => this.setState({phone: e.nativeEvent.text})}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#fff"
                style={style.input}
                onChange={(e) => this.setState({password: e.nativeEvent.text})}
              />
              {/* </KeyboardAvoidingView> */}
            </View>
            {/* <TouchableOpacity style={style.login_button} onPress={() => this.props.navigation.navigate('Login')}>
                        <Image style={style.arrow_image} source={require('./images/login.png')} />
                    </TouchableOpacity> */}
            <TouchableOpacity
              style={style.signup_button}
              onPress={() => this.signup()}>
              {/* <Image style={style.arrow_image} source={require('./images/logo.png')} /> */}
              <Icon
                name="ios-arrow-forward"
                size={60}
                color="#336dab"
                style={style.arrow_image}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
