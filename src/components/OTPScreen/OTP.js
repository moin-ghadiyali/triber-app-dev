import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import Icon from 'react-native-vector-icons/Ionicons';
import {IP} from '../constants';
import style from './style';

export default class OTP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: '',
    };

    console.log(this.props.route.params);
  }

  async signup() {
    if (this.state.otp !== '') {
      await fetch(`${IP}/v1/auth`, {
        body: JSON.stringify({
          username: this.props.route.params.username,
          password: this.props.route.params.password,
          fullname: this.props.route.params.fullname,
          phone: this.props.route.params.phone,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
        .then((response) => response.json())
        .then(async (response) => {
          if (response.responseCode == 2000) {
            this.props.navigation.navigate('BottomNavigator', {
              token: response.token,
              user: response.user,
            });
            await AsyncStorage.setItem('token', response.token);
          } else if (response.responseCode == 2001) {
            alert(`${response.message}`);
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
      <SafeAreaView>
        <View style={style.otp}>
          <Text style={style._title}>OTP</Text>
          <View style={style.form}>
            <View>
              <OTPTextInput
                ref={(e) => (this.otpInput = e)}
                handleTextChange={(value) => this.setState({ otp: value })}
                tintColor="#336dab"
                inputCount={4}
                textInputStyle={{
                  color: '#336dab',
                  borderWidth: 1,
                  borderRadius: 100,
                  borderBottomWidth: 1.2,
                  width: 70,
                  height: 70,
                }}
                containerStyle={{
                  width: '90%',
                  alignSelf: 'center',
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={style.signup_button}
            onPress={this.signup.bind(this)}>
            <Icon
              name="ios-arrow-forward"
              size={60}
              color="#fff"
              style={style.arrow_image}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
