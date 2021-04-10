import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Picker,
} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from './style';

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.route.params.user,
      fullname: this.props.route.params.user.fullname,
      profileImage: this.props.route.params.user.profileImage,
      username: this.props.route.params.user.username,
      phone: this.props.route.params.user.phone,
      email: this.props.route.params.user.email || ''
    };
  }

  render() {
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
              fontFamily: 'Montserrat-Regular',
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
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome name="user-circle" color="#fff" size={45} />
                </View>
                <View style={{flexDirection: 'column', flex: 8, top: 7}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 15,
                      justifyContent: 'center',
                    }}>
                    Full Name
                  </Text>
                  <TextInput
                    placeholder="Please fill your Full Name"
                    placeholderTextColor="#fff"
                    style={style.input}
                    value={this.state.fullname}
                    onChange={(e) =>
                      this.setState({fullname: e.nativeEvent.text})
                    }
                  />
                </View>
              </View>
              <View style={style.editView2}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome name="user-circle" color="#336dab" size={45} />
                </View>
                <View style={{flexDirection: 'column', flex: 7, top: 7}}>
                  <Text
                    style={{
                      color: '#336dab',
                      fontWeight: 'bold',
                      fontSize: 15,
                      justifyContent: 'center',
                    }}>
                    Username
                  </Text>
                  <TextInput
                    placeholder="Please fill your Username"
                    placeholderTextColor="#336dab"
                    style={[style.input, {color: '#336dab'}]}
                    value={this.state.username}
                    onChange={(e) =>
                      this.setState({username: e.nativeEvent.text})
                    }
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <AntDesign name="check" size={30} color="#008000" />
                </View>
              </View>
              <View style={style.editView}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome name="user-circle" color="#fff" size={45} />
                </View>
                <View style={{flexDirection: 'column', flex: 8, top: 7}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 15,
                      justifyContent: 'center',
                    }}>
                    Phone Number
                  </Text>
                  <TextInput
                    placeholder="Please fill your Phone Number"
                    placeholderTextColor="#fff"
                    keyboardType='number-pad'
                    style={style.input}
                    value={String(this.state.phone)}
                    onChange={(e) =>
                      this.setState({phone: e.nativeEvent.text})
                    }
                  />
                </View>
              </View>
              <View style={style.editView2}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome name="user-circle" color="#336dab" size={45} />
                </View>
                <View style={{flexDirection: 'column', flex: 8, top: 7}}>
                  <Text
                    style={{
                      color: '#336dab',
                      fontWeight: 'bold',
                      fontSize: 15,
                      justifyContent: 'center',
                    }}>
                    Email
                  </Text>
                  <TextInput
                    placeholder="Please fill your Email"
                    placeholderTextColor="#336dab"
                    style={[style.input, {color: '#336dab'}]}
                    value={this.state.email}
                    onChange={(e) =>
                      this.setState({email: e.nativeEvent.text})
                    }
                  />
                </View>
              </View>
              {/* <View style={[style.editView2]}>
                                <View style={{ flexDirection: 'column', flex: 8, top: 7, left: 10 }}>
                                    <Text style={{ color: '#336dab', fontWeight: 'bold', fontSize: 15, justifyContent: 'center' }}>Username</Text>
                                    <TextInput placeholder='Please fill your Full Name' placeholderTextColor='#336dab' style={[style.input, { color: '#336dab' }]} value='moinghadiyali' />
                                </View>
                                <FontAwesome name='user-circle' color='#336dab' size={45} style={{ flex: 2 }} />
                            </View> */}
              {/* <Text style={{ color: '#336dab', fontWeight: 'bold' }}>Username</Text>
                            <TextInput placeholder='Please fill your Username' placeholderTextColor='#336dab' style={style.input} value='moinghadiyali' />
                            <Text style={{ color: '#336dab', fontWeight: 'bold' }}>Website</Text>
                            <TextInput placeholder='Please fill your Website Link' placeholderTextColor='#336dab' style={style.input} value='moinghadiyali.com' />
                            <Text style={{ color: '#336dab', fontWeight: 'bold' }}>Bio</Text>
                            <TextInput placeholder='Please fill your Bio' placeholderTextColor='#336dab' style={style.input} value='Cool life, guys' />
                            <Text style={{ color: '#336dab', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Personal Information</Text>
                            <Text style={{ color: '#336dab', fontWeight: 'bold' }}>Gender</Text>
                            <Picker style={{ color: '#336dab', padding: 10, width: '100%', height: 50 }}>
                                <Picker.Item label='Male' value='Male' />
                                <Picker.Item label='Female' value='Female' />
                                <Picker.Item label='Prefer Not to Say' value='Prefer Not to Say' />
                            </Picker>
                            <Text style={{ color: '#336dab', fontWeight: 'bold' }}>Name</Text>
                            <TextInput placeholder='Please fill your Full Name' placeholderTextColor='#336dab' style={style.input} value='Mohammed Moin Ghadiyali' /> */}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
