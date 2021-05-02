import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Picker,
} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import style from './style';
import {TextInput} from 'react-native-paper';
import { customFontRegular } from '../Font';

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.route.params.user,
      fullname: this.props.route.params.user.fullname,
      profileImage: this.props.route.params.user.profileImage,
      username: this.props.route.params.user.username,
      phone: this.props.route.params.user.phone,
      email: this.props.route.params.user.email || '',
      oldPassword: '',
      newPassword: '',
      secureTextOldPassword: true,
      secureTextNewPassword: true,
      isUsernameAvailable: true,
    };
  }

  render() {
    var oldPasswordVisibility;
    var newPasswordVisibility;
    if (this.state.secureTextOldPassword == true) {
      oldPasswordVisibility = (
        <Feather
          name="eye-off"
          color="#336dab"
          size={30}
          style={{
            flex: 1.5,
            opacity: 0.8,
            textAlign: 'center',
            padding: 2,
          }}
          onPress={() =>
            this.setState({
              secureTextOldPassword: !this.state.secureTextOldPassword,
            })
          }
        />
      );
    } else {
      oldPasswordVisibility = (
        <Feather
          name="eye"
          color="#336dab"
          size={30}
          style={{
            flex: 1.5,
            opacity: 0.8,
            textAlign: 'center',
            padding: 2,
          }}
          onPress={() =>
            this.setState({
              secureTextOldPassword: !this.state.secureTextOldPassword,
            })
          }
        />
      );
    }
    if (this.state.secureTextNewPassword == true) {
      newPasswordVisibility = (
        <Feather
          name="eye-off"
          color="#336dab"
          size={30}
          style={{
            flex: 1.5,
            opacity: 0.8,
            textAlign: 'center',
            padding: 2,
          }}
          onPress={() =>
            this.setState({
              secureTextNewPassword: !this.state.secureTextNewPassword,
            })
          }
        />
      );
    } else {
      newPasswordVisibility = (
        <Feather
          name="eye"
          color="#336dab"
          size={30}
          style={{
            flex: 1.5,
            opacity: 0.8,
            textAlign: 'center',
            padding: 2,
          }}
          onPress={() =>
            this.setState({
              secureTextNewPassword: !this.state.secureTextNewPassword,
            })
          }
        />
      );
    }
    var usernameAvailable;
    if (this.state.isUsernameAvailable == true) {
      usernameAvailable = (
        <Octicons
          name="verified"
          color="green"
          size={30}
          style={{
            flex: 1.5,
            opacity: 0.8,
            textAlign: 'center',
            padding: 2,
          }}
        />
      );
    } else {
      usernameAvailable = (
        <Entypo
          name="circle-with-cross"
          color="red"
          size={30}
          style={{
            flex: 1.5,
            opacity: 0.8,
            textAlign: 'center',
            padding: 2,
          }}
        />
      );
    }
    return (
      <View style={style.editScreen}>
        <View style={style.header}>
          <TouchableOpacity
            style={style.back}
            onPress={() => this.props.navigation.pop()}>
            <AntDesign name="close" size={30} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              flex: 8,
              color: '#fff',
              alignSelf: 'center',
              fontSize: 20,
              left: 10,
              fontFamily: customFontRegular,
            }}>
            Edit Profile
          </Text>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign name="check" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={style.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.editProfileImage}>
              <TouchableOpacity>
                <Image
                  source={{uri: this.state.profileImage}}
                  style={style.image}
                />
              </TouchableOpacity>
            </View>
            <View style={style.form}>
              <View style={style.editView}>
                <Feather
                  name="user"
                  color="#336dab"
                  size={30}
                  style={{
                    flex: 1.5,
                    opacity: 0.8,
                    textAlign: 'center',
                    padding: 2,
                  }}
                />
                <TextInput
                  placeholderTextColor="#fff"
                  style={style.input}
                  mode="flat"
                  label="Full Name"
                  underlineColor="#fff"
                  selectionColor="#336dab"
                  theme={{
                    colors: {
                      text: '#000',
                      placeholder: '#336dab',
                      primary: '#336dab',
                    },
                  }}
                  value={this.state.fullname}
                  onChange={(e) =>
                    this.setState({fullname: e.nativeEvent.text})
                  }
                />
                <View style={{flex: 1.5}}></View>
              </View>
              <View style={style.editView}>
                <FontAwesome
                  name="user-circle-o"
                  color="#336dab"
                  size={30}
                  style={{
                    flex: 1.5,
                    opacity: 0.8,
                    textAlign: 'center',
                    padding: 2,
                  }}
                />
                <TextInput
                  placeholderTextColor="#fff"
                  style={style.input}
                  mode="flat"
                  label="Username"
                  underlineColor="#fff"
                  selectionColor="#336dab"
                  theme={{
                    colors: {
                      text: '#000',
                      placeholder: '#336dab',
                      primary: '#336dab',
                    },
                  }}
                  value={this.state.username}
                  onChange={(e) =>
                    this.setState({username: e.nativeEvent.text})
                  }
                />
                {usernameAvailable}
              </View>
              <View style={style.editView}>
                <Feather
                  name="info"
                  color="#336dab"
                  size={30}
                  style={{
                    flex: 1.5,
                    opacity: 0.8,
                    textAlign: 'center',
                    padding: 2,
                  }}
                />
                <TextInput
                  placeholderTextColor="#fff"
                  style={style.input}
                  mode="flat"
                  label="Bio"
                  underlineColor="#fff"
                  selectionColor="#336dab"
                  theme={{
                    colors: {
                      text: '#000',
                      placeholder: '#336dab',
                      primary: '#336dab',
                    },
                  }}
                  value={this.state.bio}
                  onChange={(e) => this.setState({bio: e.nativeEvent.text})}
                />
                <View style={{flex: 1.5}}></View>
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#336dab',
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}>
                Change Password
              </Text>
              <View style={style.editView}>
                <Feather
                  name="lock"
                  color="#336dab"
                  size={30}
                  style={{
                    flex: 1.5,
                    opacity: 0.8,
                    textAlign: 'center',
                    padding: 2,
                  }}
                />
                <TextInput
                  placeholderTextColor="#fff"
                  style={style.input}
                  mode="flat"
                  label="Old Password"
                  secureTextEntry={this.state.secureTextOldPassword}
                  underlineColor="#fff"
                  selectionColor="#336dab"
                  theme={{
                    colors: {
                      text: '#000',
                      placeholder: '#336dab',
                      primary: '#336dab',
                    },
                  }}
                  value={this.state.oldPassword}
                  onChange={(e) =>
                    this.setState({oldPassword: e.nativeEvent.text})
                  }
                />
                {/* <View style={{flex: 1.5}}> */}
                {oldPasswordVisibility}
                {/* </View> */}
              </View>
              <View style={style.editView}>
                <Feather
                  name="lock"
                  color="#336dab"
                  size={30}
                  style={{
                    flex: 1.5,
                    opacity: 0.8,
                    textAlign: 'center',
                    padding: 2,
                  }}
                />
                <TextInput
                  placeholderTextColor="#fff"
                  style={style.input}
                  mode="flat"
                  label="New Password"
                  secureTextEntry={this.state.secureTextNewPassword}
                  underlineColor="#fff"
                  selectionColor="#336dab"
                  theme={{
                    colors: {
                      text: '#000',
                      placeholder: '#336dab',
                      primary: '#336dab',
                    },
                  }}
                  value={this.state.newPassword}
                  onChange={(e) =>
                    this.setState({newPassword: e.nativeEvent.text})
                  }
                />
                {newPasswordVisibility}
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#336dab',
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}>
                Private Information
              </Text>
              <View style={style.editView}>
                <Feather
                  name="phone-call"
                  color="#336dab"
                  size={30}
                  style={{
                    flex: 1.5,
                    opacity: 0.8,
                    textAlign: 'center',
                    padding: 2,
                  }}
                />
                <TextInput
                  placeholder="Please fill your Phone"
                  placeholderTextColor="#fff"
                  style={style.input}
                  mode="flat"
                  label="Phone Number"
                  keyboardType="number-pad"
                  maxLength={10}
                  underlineColor="#fff"
                  selectionColor="#336dab"
                  theme={{
                    colors: {
                      text: '#000',
                      placeholder: '#336dab',
                      primary: '#336dab',
                    },
                  }}
                  value={String(this.state.phone)}
                  onChange={(e) => this.setState({phone: e.nativeEvent.text})}
                />
                <Octicons
                  name="verified"
                  color="green"
                  size={30}
                  style={{
                    flex: 1.5,
                    opacity: 0.8,
                    textAlign: 'center',
                    padding: 2,
                  }}
                />
              </View>
              <View style={style.editView}>
                <MaterialCommunityIcons
                  name="email-outline"
                  color="#336dab"
                  size={30}
                  style={{
                    flex: 1.5,
                    opacity: 0.8,
                    textAlign: 'center',
                    padding: 2,
                  }}
                />
                <TextInput
                  placeholderTextColor="#fff"
                  style={style.input}
                  mode="flat"
                  label="Email"
                  keyboardType="email-address"
                  underlineColor="#fff"
                  selectionColor="#336dab"
                  theme={{
                    colors: {
                      text: '#000',
                      placeholder: '#336dab',
                      primary: '#336dab',
                    },
                  }}
                  value={this.state.email}
                  onChange={(e) => this.setState({email: e.nativeEvent.text})}
                />
                <View style={{flex: 1.5}}></View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
