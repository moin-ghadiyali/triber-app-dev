import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  TouchableHighlight,
  Alert,
  ImageBackground,
  FlatList,
} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import style from './style';
import {Searchbar} from 'react-native-paper';
import axios from 'axios';
import {IP} from '../constants';
import {customFontRegular} from '../Font';
import AsyncStorage from '@react-native-community/async-storage';

const Tab = createMaterialTopTabNavigator();

export class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: '',
    };
  }

  componentDidMount() {
    fetch(`${IP}/v1/posts`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: this.props.token,
      },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({
          posts: jsonResponse.result,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  routePost = () => {
    return this.props.navigation.navigate('Post');
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          backgroundColor: '#fff',
        }}>
        <FlatList
          data={this.state.posts}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{flexGrow: 1}}
          ListEmptyComponent={<NoPostsFound />}
          renderItem={({item}) => <ShortPostCards urlNew={item.postImage} />}
        />
        {/* <ShortPostCards urlNew={pic1} />
        <ShortPostCards urlNew={pic2} />
        <ShortPostCards urlNew={pic3} />
        <ShortPostCards urlNew={pic4} />
        <ShortPostCards urlNew={pic5} />
        <ShortPostCards urlNew={pic2} />
        <ShortPostCards urlNew={pic3} />
        <ShortPostCards urlNew={pic4} />
        <ShortPostCards urlNew={pic5} />
        <ShortPostCards urlNew={pic2} />
        <ShortPostCards urlNew={pic3} /> */}
      </View>
    );
  }
}

class NoPostsFound extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          position: 'relative',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Fontisto
          name="photograph"
          size={90}
          color="#336dab"
          style={{alignSelf: 'center', opacity: 0.6}}
        />
        <Text
          style={{
            marginTop: 7,
            fontSize: 13,
            color: '#336dab',
            fontFamily: customFontRegular,
            opacity: 0.6,
          }}>
          No Posts Yet
        </Text>
      </View>
    );
  }
}

class Tags extends React.Component {
  render() {
    let pic1 = require('./images/postpic1.jpg');
    let pic2 = require('./images/profilepic2.jpg');
    let pic3 = require('./images/profilepic3.jpg');
    let pic4 = require('./images/profilepic4.jpg');
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          backgroundColor: '#fff',
        }}>
        <ShortPostCards urlNew={pic1} />
        <ShortPostCards urlNew={pic2} />
        <ShortPostCards urlNew={pic3} />
        <ShortPostCards urlNew={pic4} />
      </View>
    );
  }
}

class ShortPostCards extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.urlNew);
  }
  render() {
    return (
      <TouchableOpacity style={style.shortPostCards} onPress={this.props.route}>
        <Image
          source={{uri: this.props.urlNew}}
          style={{width: '100%', height: '100%'}}
        />
      </TouchableOpacity>
    );
  }
}

class UserFollowCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      removeAlertVisible: false,
    };

    this.setRemoveAlertVisible = this.setRemoveAlertVisible.bind(this);
  }

  setRemoveAlertVisible() {
    this.setState({removeAlertVisible: !this.state.removeAlertVisible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.removeAlertVisible}
          onRequestClose={() => {
            this.setRemoveAlertVisible(!this.state.removeAlertVisible);
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.7)',
            }}>
            <View style={style.removeAlertBox}>
              <View
                style={{
                  width: '100%',
                  padding: 15,
                  backgroundColor: '#336dab',
                }}>
                <Text style={{color: '#fff', fontSize: 15}}>
                  Remove Bhavin Bhanushali?
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
                }}>
                <Image
                  source={require('./images/profilepic.jpg')}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    borderColor: '#fff',
                    borderWidth: 0.7,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{textAlign: 'center', color: '#fff', marginTop: 10}}>
                  GOZZBY won't tell @bhavin.bhanushali they were removed from
                  your followers.
                </Text>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: '#336dab'}}>
                <TouchableOpacity
                  style={style.alertOptions}
                  onPress={this.setRemoveAlertVisible}>
                  <Text
                    style={{color: '#fff', textAlign: 'center', fontSize: 15}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.alertOptions}>
                  <Text
                    style={{color: '#fff', textAlign: 'center', fontSize: 15}}>
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity style={style.userInfo}>
          <View style={style.followPicView}>
            <Image
              source={require('./images/profilepic.jpg')}
              style={style.followPic}
            />
          </View>
          <View style={style.userInfoNames}>
            <Text style={{fontSize: 16, color: '#000'}}>Bhavin Bhanushali</Text>
            <Text style={{fontSize: 12, color: '#000'}}>
              @bhavin.bhanushali
            </Text>
          </View>
          <View style={style.followButtonView}>
            <TouchableOpacity
              style={[style.followButton, {backgroundColor: '#336dab'}]}
              onPress={this.setRemoveAlertVisible}>
              <Text style={{textAlign: 'center', color: '#fff', fontSize: 14}}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class UserFollowingCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      following: true,
    };
  }

  toggleFollowing(visible) {
    this.setState({following: visible});
  }
  render() {
    let followStatus;
    if (this.state.following == true) {
      followStatus = (
        <TouchableOpacity
          style={style.followButton}
          onPress={() => {
            this.toggleFollowing(!this.state.following);
          }}>
          <Text style={{textAlign: 'center', color: '#336dab', fontSize: 14}}>
            Following
          </Text>
        </TouchableOpacity>
      );
    } else {
      followStatus = (
        <TouchableOpacity
          style={[style.followButton, {backgroundColor: '#336dab'}]}
          onPress={() => {
            this.toggleFollowing(!this.state.following);
          }}>
          <Text style={{textAlign: 'center', color: '#fff', fontSize: 14}}>
            Follow
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={style.userInfo}>
        <View style={style.followPicView}>
          <Image
            source={require('./images/profilepic.jpg')}
            style={style.followPic}
          />
        </View>
        <View style={style.userInfoNames}>
          <Text style={{fontSize: 16, color: '#000'}}>Bhavin Bhanushali</Text>
          <Text style={{fontSize: 12, color: '#000'}}>@bhavin.bhanushali</Text>
        </View>
        <View style={style.followButtonView}>{followStatus}</View>
      </TouchableOpacity>
    );
  }
}

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.route.params.id,
      user: '',
      self: this.props.route.params.self,
      followerModalVisible: false,
      followingModalVisible: false,
      toggleFollowIconBool: false,
      scaleFollowAnimated: new Animated.Value(0),
      scaleMessageAnimated: new Animated.Value(0),
      scaleProfilePicAnimated: new Animated.Value(0),
      translateXNameAnimated: new Animated.Value(-500),
      translateXDataAnimated: new Animated.Value(500),
      scaleEditButtonAnimated: new Animated.Value(0),
      followers: [],
      following: [],
      token: null,
    };
    this.setFollowerModalVisible = this.setFollowerModalVisible.bind(this);
    this.setFollowingModalVisible = this.setFollowingModalVisible.bind(this);
    this.toggleFollowIcon = this.toggleFollowIcon.bind(this);
    this.scaleFollowAnimation = this.scaleFollowAnimation.bind(this);
    this.scaleMessageAnimation = this.scaleMessageAnimation.bind(this);
    this.scaleProfilePicAnimation = this.scaleProfilePicAnimation.bind(this);
    this.translateXNameAnimation = this.translateXNameAnimation.bind(this);
    this.translateXDataAnimation = this.translateXDataAnimation.bind(this);
    this.scaleEditButtonAnimation = this.scaleEditButtonAnimation.bind(this);
  }

  navigatePost() {
    return this.props.navigation.navigate('Post');
  }

  componentDidMount() {
    fetch(`${IP}/v1/profile`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: this.props.route.params.token,
      },
      body: JSON.stringify({
        id: this.state.id,
      }),
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({
          user: jsonResponse.result[0],
        });
      })
      .catch((e) => {
        console.log(e);
      });
    // this.setState({
    //   token: AsyncStorage.getItem('token'),
    // });
    // console.log(this.state.token);
    this.scaleFollowAnimation();
    this.scaleMessageAnimation();
    this.scaleProfilePicAnimation();
    this.translateXNameAnimation();
    this.translateXDataAnimation();
    this.scaleEditButtonAnimation();
  }

  async follow() {
    await fetch(`${IP}/v1/followers`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: await AsyncStorage.getItem('token'),
      },
      body: JSON.stringify({
        responderId: this.state.id,
      }),
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({
          toggleFollowIconBool: !this.state.toggleFollowIconBool,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async followers() {
    await fetch(`${IP}/v1/followers`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: await AsyncStorage.getItem('token'),
      },
      body: JSON.stringify({
        userId: this.state.id,
      }),
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({
          followers: jsonResponse.result,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async following() {
    await fetch(`${IP}/v1/following`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: await AsyncStorage.getItem('token'),
      },
      body: JSON.stringify({
        userId: this.state.id,
      }),
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({
          following: jsonResponse.result,
        });
        console.log(jsonResponse.result);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  scaleFollowAnimation() {
    Animated.timing(this.state.scaleFollowAnimated, {
      toValue: 1.2,
      timing: 10,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.scaleFollowAnimated, {
        toValue: 1,
        timing: 10,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  }

  scaleMessageAnimation() {
    Animated.timing(this.state.scaleMessageAnimated, {
      toValue: 1.2,
      timing: 10,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.scaleMessageAnimated, {
        toValue: 1,
        timing: 10,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  }

  scaleProfilePicAnimation() {
    Animated.timing(this.state.scaleProfilePicAnimated, {
      toValue: 1.2,
      timing: 10,
      duration: 900,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.scaleProfilePicAnimated, {
        toValue: 1,
        timing: 10,
        duration: 900,
        useNativeDriver: true,
      }).start();
    });
  }

  scaleEditButtonAnimation() {
    Animated.timing(this.state.scaleEditButtonAnimated, {
      toValue: 0.8,
      timing: 10,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.scaleEditButtonAnimated, {
        toValue: 1,
        timing: 10,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  }

  translateXNameAnimation() {
    Animated.timing(this.state.translateXNameAnimated, {
      toValue: 20,
      timing: 10,
      duration: 700,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.translateXNameAnimated, {
        toValue: 0,
        timing: 10,
        duration: 700,
        useNativeDriver: true,
      }).start();
    });
  }

  translateXDataAnimation() {
    Animated.timing(this.state.translateXDataAnimated, {
      toValue: -20,
      timing: 10,
      duration: 700,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.translateXDataAnimated, {
        toValue: 0,
        timing: 10,
        duration: 700,
        useNativeDriver: true,
      }).start();
    });
  }

  setFollowerModalVisible() {
    this.followers();
    this.setState({followerModalVisible: !this.state.followerModalVisible});
  }

  setFollowingModalVisible() {
    this.following();
    this.setState({followingModalVisible: !this.state.followingModalVisible});
  }

  toggleFollowIcon(visible) {
    this.setState({toggleFollowIconBool: visible});
    this.scaleFollowAnimation();
  }

  render() {
    const scaleFollowAnimateStyle = {
      transform: [{scale: this.state.scaleFollowAnimated}],
    };

    const scaleMessageAnimateStyle = {
      transform: [{scale: this.state.scaleMessageAnimated}],
    };

    const scaleProfilePicAnimateStyle = {
      transform: [{scale: this.state.scaleProfilePicAnimated}],
    };

    const scaleEditButtonAnimateStyle = {
      transform: [{scale: this.state.scaleEditButtonAnimated}],
    };

    const translateXNameAnimateStyle = {
      transform: [{translateX: this.state.translateXNameAnimated}],
    };

    const translateXDataAnimateStyle = {
      transform: [{translateX: this.state.translateXDataAnimated}],
    };

    let icon;
    let follow;
    let edit;
    if (this.state.self == true) {
      follow = <View style={style.icon1}></View>;
      edit = (
        <TouchableOpacity
          style={{position: 'absolute', right: 20, bottom: 20}}
          onPress={this.scaleEditButtonAnimation}>
          <Animated.View
            style={[scaleEditButtonAnimateStyle]}
            onTouchEndCapture={() =>
              this.props.navigation.navigate('EditProfile', {
                user: this.state.user,
                token: this.props.route.params.token,
              })
            }>
            <MaterialCommunityIcons
              name="account-edit"
              size={30}
              color="#fff"
              style={style.editButton}
            />
          </Animated.View>
        </TouchableOpacity>
      );
    } else {
      edit = <View></View>;
      if (this.state.toggleFollowIconBool == false) {
        icon = (
          <SimpleLineIcons
            name="user-follow"
            color="#fff"
            size={30}
            style={style.iconDetails}
            onPress={() => this.follow()}
          />
        );
      } else {
        icon = (
          <SimpleLineIcons
            name="user-following"
            color="#fff"
            size={30}
            style={style.iconDetails}
            onPress={() => this.follow()}
          />
        );
      }
      follow = (
        <TouchableOpacity
          style={style.icon1}
          onPress={() => {
            this.toggleFollowIcon(!this.state.toggleFollowIconBool);
          }}>
          <Animated.View style={[scaleFollowAnimateStyle]}>
            {icon}
          </Animated.View>
        </TouchableOpacity>
      );
    }
    return (
      <View style={style.profile}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.followerModalVisible}
          onRequestClose={() => {
            this.setFollowerModalVisible(!this.state.followerModalVisible);
          }}>
          <View style={{flex: 1}}>
            <View style={style.followerModalHeader}>
              <TouchableOpacity
                style={style.back}
                onPress={() => {
                  this.setFollowerModalVisible(
                    !this.state.followerModalVisible,
                  );
                }}>
                <Icon name="ios-arrow-back" size={30} color="#336dab" />
              </TouchableOpacity>
              <Text style={{flex: 8.5, color: '#336dab', fontSize: 17}}>
                Followers
              </Text>
            </View>
            <View style={{flex: 12, flexDirection: 'column'}}>
              <View style={{flex: 9}}>
                {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                <View style={{width: '100%', padding: 10, paddingBottom: 0}}>
                  {/* <Icon name='md-search' size={25} color='#336dab' style={style.searchIcon} />
                                <TextInput placeholder='Search...' placeholderTextColor='#336dab' style={style.searchBar} /> */}
                  <Searchbar
                    style={style.searchBar}
                    placeholder="Search..."
                    placeholderTextColor="#666"
                    iconColor="#336dab"
                    inputStyle={{fontSize: 15}}
                    theme={{colors: {text: '#666', primary: '#336dab'}}}
                    clearIcon
                    clearButtonMode="while-editing"
                  />
                </View>
                <FlatList
                  data={this.state.followers}
                  keyExtractor={(item, index) => index.toString()}
                  contentContainerStyle={{flexGrow: 1}}
                  ListEmptyComponent={<NoFollowersFound />}
                  renderItem={({item}) => <UserFollowCard />}
                />
                {/* </ScrollView> */}
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.followingModalVisible}
          onRequestClose={() => {
            this.setFollowingModalVisible(!this.state.followingModalVisible);
          }}>
          <View style={{flex: 1}}>
            <View style={style.followerModalHeader}>
              <TouchableOpacity
                style={style.back}
                onPress={() => {
                  this.setFollowingModalVisible(
                    !this.state.followingModalVisible,
                  );
                }}>
                <Icon name="ios-arrow-back" size={30} color="#336dab" />
              </TouchableOpacity>
              <Text style={{flex: 8.5, color: '#336dab', fontSize: 17}}>
                Following
              </Text>
            </View>
            <View style={{flex: 12, flexDirection: 'column'}}>
              <View style={{flex: 9}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{width: '100%', padding: 10, paddingBottom: 0}}>
                    {/* <Icon name='md-search' size={25} color='#336dab' style={style.searchIcon} />
                                <TextInput placeholder='Search...' placeholderTextColor='#336dab' style={style.searchBar} /> */}
                    <Searchbar
                      style={style.searchBar}
                      placeholder="Search..."
                      placeholderTextColor="#666"
                      iconColor="#336dab"
                      inputStyle={{fontSize: 15}}
                      theme={{colors: {text: '#666', primary: '#336dab'}}}
                      clearIcon
                      clearButtonMode="while-editing"
                    />
                  </View>
                  <FlatList
                    data={this.state.following}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{flexGrow: 1}}
                    ListEmptyComponent={<NoFollowersFound />}
                    renderItem={({item}) => <UserFollowingCard />}
                  />
                </ScrollView>
              </View>
            </View>
          </View>
        </Modal>
        <View style={style.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground
              source={require('./images/background2.jpg')}
              style={{width: '100%', position: 'relative'}}>
              <View style={style.header}>
                <TouchableOpacity
                  style={style.back}
                  onPress={() => this.props.navigation.pop()}>
                  <Icon name="ios-arrow-back" size={30} color="#fff" />
                </TouchableOpacity>
                {/* <Text style={{ flex: 8, color: '#fff', fontFamily: customFontRegular }}>bhavin.bhanushali</Text> */}
                {/* <TouchableOpacity style={style.edit}>
                                    <AntDesign name='edit' size={30} color='#fff' />
                                </TouchableOpacity> */}
                <TouchableOpacity
                  style={style.setting}
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <MaterialCommunityIcons
                    name="logout"
                    size={30}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <View style={style.profileImage}>
                  {follow}
                  <Animated.View
                    style={[{flex: 1.5}, scaleProfilePicAnimateStyle]}>
                    <Image
                      source={{uri: this.state.user.profileImage}}
                      style={style.profilePic}
                    />
                  </Animated.View>
                  <View style={style.icon2}></View>
                  {/* <TouchableOpacity
                    style={style.icon2}
                    onPress={this.scaleMessageAnimation}>
                    <Animated.View
                      style={[scaleMessageAnimateStyle]}
                      onTouchEndCapture={() =>
                        this.props.navigation.navigate('ChatRoom')
                      }>
                      <MaterialCommunityIcons
                        name="message-text-outline"
                        color="#fff"
                        size={30}
                        style={style.iconDetails}
                      />
                    </Animated.View>
                  </TouchableOpacity> */}
                </View>
                <Animated.View
                  style={[style.names, translateXNameAnimateStyle]}>
                  <Text style={{fontSize: 17}}>{this.state.user.fullname}</Text>
                  <Text style={{fontSize: 14}}>
                    @{this.state.user.username}
                  </Text>
                </Animated.View>
                <Animated.View
                  style={[style.data2, translateXDataAnimateStyle]}>
                  <View style={style.data2Content}>
                    <Text>{this.state.user.postCount}</Text>
                    <Text>Posts</Text>
                    <View style={style.line}></View>
                  </View>
                  <TouchableOpacity
                    style={style.data2Content}
                    onPress={() => {
                      this.setFollowerModalVisible(true);
                    }}>
                    <Text>{this.state.user.followersCount}</Text>
                    <Text>Followers</Text>
                    <View style={style.line}></View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={style.data2Content}
                    onPress={() => {
                      this.setFollowingModalVisible(true);
                    }}>
                    <Text>{this.state.user.followingCount}</Text>
                    <Text>Following</Text>
                    <View style={style.line}></View>
                  </TouchableOpacity>
                </Animated.View>
                <View style={style.bio}>
                  <Text style={{textAlign: 'center'}}>
                    {this.state.user.bio}
                  </Text>
                </View>
              </View>
            </ImageBackground>
            <TobBarNav
              token={this.props.route.params.token}
              id={this.props.route.params.id}
            />
          </ScrollView>
          {edit}
        </View>
      </View>
    );
  }
}

class NoFollowersFound extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          position: 'relative',
          top: 300,
        }}>
        <Fontisto
          name="photograph"
          size={90}
          color="#336dab"
          style={{alignSelf: 'center', opacity: 0.6}}
        />
        <Text
          style={{
            marginTop: 7,
            fontSize: 13,
            color: '#336dab',
            fontFamily: customFontRegular,
            opacity: 0.6,
          }}>
          No Followers Yet
        </Text>
      </View>
    );
  }
}

class TobBarNav extends React.Component {
  render() {
    return (
      <Tab.Navigator
        style={{position: 'relative', backgroundColor: '#fff'}}
        initialRouteName="Posts"
        tabBarOptions={{
          activeTintColor: '#336dab',
          inactiveTintColor: '#7098c4',
          labelStyle: {fontSize: 15},
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: '#fff',
          },
          indicatorStyle: {
            borderBottomColor: '#336dab',
            borderBottomWidth: 1,
          },
        }}>
        <Tab.Screen
          name="Posts"
          component={Posts}
          options={{
            tabBarLabel: 'Posts',
            tabBarIcon: () => <Feather name="grid" size={20} color="#336dab" />,
          }}
        />
        {/* <Tab.Screen
          name="Tags"
          component={Tags}
          options={{
            tabBarLabel: 'Tags',
            tabBarIcon: () => <Feather name="tag" size={20} color="#336dab" />,
          }}
        /> */}
      </Tab.Navigator>
    );
  }
}
