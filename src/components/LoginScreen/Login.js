import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-paper';
import {IP} from '../constants';
import {customFontRegular} from '../Font';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  async login() {
    if (this.state.username !== '' && this.state.password !== '') {
      console.log(this.state);
      await fetch(`${IP}/v1/login`, {
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
        .then((response) => response.json())
        .then(async (response) => {
          console.log(response);
          if (response.responseCode == 1) {
            await AsyncStorage.setItem('token', response.token);
            this.props.navigation.navigate('BottomNavigator', {
              token: response.token,
              user: response.user,
            });
          } else {
            alert('Please enter valid username/password!');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('Please Enter Your Credentials Properly!');
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('./images/background2.jpg')}
        style={style.backgroundImage}>
        <SafeAreaView>
          <View style={style.login}>
            <TouchableOpacity
              style={{position: 'absolute', top: 0, left: 0, padding: 15}}
              onPress={() => this.props.navigation.pop()}>
              {/* <Image style={style.back} source={require('./images/logo.png')} /> */}
              <Icon name="ios-arrow-back" size={40} color="#336dab" />
            </TouchableOpacity>
            <Text style={style.login_title}>Login</Text>
            <View style={style.login_form}>
              <TextInput
                label="Username"
                mode="flat"
                // placeholder="Username"
                selectionColor="#fff"
                // placeholderTextColor='#fff'
                underlineColor="#fff"
                style={style.input}
                theme={{
                  colors: {text: '#fff', placeholder: '#fff', primary: '#fff'},
                }}
                onChange={(event) =>
                  this.setState({username: event.nativeEvent.text})
                }
                // value={this.state.username}
                // onSubmitEditing={(event) => this.setState({ username: event.nativeEvent.text })}
              />
              <TextInput
                label="Password"
                mode="flat"
                // placeholder="Passcode"
                selectionColor="#336dab"
                // placeholderTextColor='#fff'
                underlineColor="#fff"
                secureTextEntry={true}
                style={style.input}
                theme={{
                  colors: {text: '#fff', placeholder: '#fff', primary: '#fff'},
                }}
                onChange={(event) =>
                  this.setState({password: event.nativeEvent.text})
                }
                // value={this.state.password}
                // onSubmitEditing={(event) => this.setState({ password: event.nativeEvent.text })}
              />
              <TouchableOpacity
                style={style.buttons}
                onPress={() =>
                  this.props.navigation.navigate('ForgotPassword')
                }>
                <Text style={{color: '#ffffff', fontFamily: customFontRegular}}>
                  Forgot Passcode?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.buttons}
                onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={{color: '#ffffff', fontFamily: customFontRegular}}>
                  Don't have an account? Join now!
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={style.login_button}
              onPress={this.login.bind(this)}>
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
