import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
} from 'react-native';
import style from './style';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
  PinchGestureHandler,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {Easing} from 'react-native-reanimated';
import {IP} from '../constants';
import {customFontBold, customFontRegular} from '../Font';
import {TextInput} from 'react-native-paper';

class PostCard extends React.Component {
  scale = new Animated.Value(1);
  constructor(props) {
    super(props);
    this.doubleTapRef = React.createRef();
    this.state = {
      profileImage: this.props.profileImage,
      post: this.props.post,
      like: false,
      shareModal: false,
      commentModel: false,
      scaleLikeAnimated: new Animated.Value(1),
    };
    console.log(this.state.post.postImage);
    this.openShare = this.openShare.bind(this);
    this.scaleLikeAnimation = this.scaleLikeAnimation.bind(this);
  }

  // componentDidMount() {
  //   this.setState(() => {});
  // }

  scaleLikeAnimation() {
    Animated.timing(this.state.scaleLikeAnimated, {
      toValue: 1.4,
      // timing: 10,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start(() => {
      Animated.timing(this.state.scaleLikeAnimated, {
        toValue: 1,
        // timing: 10,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    });
  }

  onPinchEvent() {
    Animated.event(
      [
        {
          nativeEvent: {scale: this.scale},
        },
      ],
      {
        useNativeDriver: true,
      },
    );
  }

  onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      console.log(this.scale);
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return <Text>Hello</Text>;
  };

  openShare = (visible) => {
    this.setState({shareModal: visible});
  };

  openComment = (visible) => {
    this.setState({commentModel: visible});
  };

  async like() {
    await fetch(`${IP}/v1/like`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: this.props.token,
      },
      body: JSON.stringify({
        postId: this.state.post._id,
      }),
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        if ((jsonResponse.message = 'Liked')) {
          this.setState({
            like: !this.state.like,
          });
        } else {
          this.setState({
            like: !this.state.like,
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
    this.scaleLikeAnimation();
  }

  render() {
    let url = `../../../public/${this.props.post.postImage}`.toString();
    let like;
    const scaleAnimationStyle = {
      transform: [{scale: this.state.scaleLikeAnimated}],
    };
    if (this.state.like == false) {
      console.log(this.state.like);
      like = (
        <MaterialCommunityIcons
          name="heart-outline"
          color="#336dab"
          size={27}
          style={style.like}
          onPress={() => this.like()}
        />
      );
    } else {
      like = (
        <MaterialCommunityIcons
          name="heart"
          color="#336dab"
          size={27}
          style={style.like}
          onPress={() => this.like()}
        />
      );
    }
    return (
      <View style={style.postCard}>
        <View style={style.userData}>
          <TouchableOpacity style={style.userDataChild}>
            <View style={style.profilePic}>
              <Image
                style={{
                  position: 'relative',
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#fff',
                }}
                source={{uri: this.state.post.user[0].profileImage}}
              />
            </View>
            <View style={style.names}>
              <Text style={style.name}>{this.state.post.user[0].username}</Text>
              {/* <Text style={style.usernameNew}>
                @{this.state.post.user[0].username}
              </Text> */}
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={style.userDataOptions}>
            <Ionicon style={{alignSelf: 'center'}} name="md-more" size={25} />
          </TouchableOpacity> */}
        </View>
        {/* <Swipeable renderLeftActions={this.renderLeftActions}> */}
        {/* <TapGestureHandler
          waitFor={this.doubleTapRef}
          onHandlerStateChange={() => alert('hello')}> */}
        {/* <TapGestureHandler
          numberOfTaps={2}
          ref={this.doubleTapRef}
          // onHandlerStateChange={() => alert('double')}
          style={style.image}> */}
        <PinchGestureHandler
          onGestureEvent={this.onPinchEvent}
          onHandlerStateChange={this.onPinchStateChange}>
          <Animated.Image
            style={{
              // style.postImage,
              width: '100%',
              height: Dimensions.get('window').width,
              transform: [{scale: this.scale}],
            }}
            source={{uri: this.props.post.postImage}}
            // resizeMode="contain"
          />
        </PinchGestureHandler>
        {/* </TapGestureHandler> */}
        {/* </TapGestureHandler> */}
        {/* </Swipeable> */}
        <View style={style.postOptions}>
          {/* <MaterialCommunityIcons
            name="heart-outline"
            color="#8B0000"
            size={27}
            style={style.superLike}
          /> */}
          <Animated.View style={[scaleAnimationStyle]}>{like}</Animated.View>
          <MaterialCommunityIcons
            name="comment-text-outline"
            color="#336dab"
            size={27}
            style={style.comment}
            onPress={() =>
              this.setState({commentModel: !this.state.commentModel})
            }
          />
          {/* <Feather name="share" color='#336dab' size={25} style={style.share} /> */}
          <FontAwesome
            name="bookmark-o"
            color="#336dab"
            size={27}
            style={style.save}
          />
        </View>
        <View style={style.caption}>
          <TouchableOpacity>
            <Text
              style={{
                color: '#336dab',
                fontSize: 13,
                fontFamily: customFontBold,
                // marginLeft: 10
              }}>
              @{this.state.post.user[0].username}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: '#000',
              textAlign: 'justify',
              fontSize: 13,
              fontFamily: customFontRegular,
              // marginLeft: 10
            }}>
            {this.state.post.caption}
          </Text>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.commentModel}
          onRequestClose={() => {
            this.openComment(!this.state.commentModel);
          }}>
          <View style={style.header}>
            <Text style={[style.username, {fontSize: 23}]}>Comments</Text>
          </View>
          <View style={{flex: 9.5}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  alignSelf: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{
                    uri:
                      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQry1iOrc8u_v8st6ECCwY2tqk-jJO7VyLeLzLcG5e5YbnuB1xT',
                  }}
                  size={25}
                  style={{borderRadius: 100}}
                />
              </View>
              <View style={{flex: 9}}>
                <Text></Text>
              </View>
            </View>
          </View>
          <View style={style.commentBox}>
            <View
              style={{
                flex: 1.5,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  alignSelf: 'center',
                }}
                source={{uri: this.state.profileImage}}
              />
            </View>
            <View
              style={{
                flex: 7,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <TextInput
                placeholder="Type your comment here..."
                style={{
                  color: '#000',
                  backgroundColor: '#fff',
                  alignSelf: 'center',
                  width: '100%',
                }}
              />
            </View>
            <View
              style={{
                flex: 1.5,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Icons
                name="send-outline"
                size={25}
                color="#336dab"
                style={{alignSelf: 'center'}}
              />
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.shareModal}
          onRequestClose={() => {
            this.openShare(!this.state.shareModal);
          }}>
          {/* <TouchableWithoutFeedback onPress={() => { this.openShare(!this.state.shareModal); }}> */}
          <View style={style.modal}>
            {/* <TouchableWithoutFeedback onPress={() => { }}> */}
            <View style={style.modalBox}>
              <View
                style={{
                  borderColor: '#fff',
                  borderWidth: 2,
                  borderRadius: 5,
                  width: 70,
                  alignSelf: 'center',
                }}></View>
              <View style={style.search}>
                <TextInput
                  // label='Search'
                  // mode='flat'
                  // theme={{ colors: { text: '#fff', placeholder: '#fff', primary: '#fff' } }}
                  placeholder="Search User..."
                  placeholderTextColor="#fff"
                  style={style.textSearch}
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  borderColor: '#fff',
                  borderWidth: 0.4,
                  borderRadius: 5,
                  width: '100%',
                  alignSelf: 'center',
                }}></View>
              {/* <View style={{ flex: 1 }}>
                                        <View style={style.shareUser}>
                                            <View style={style.profileIcon}>
                                                <Image source={require('./images/profilepic.jpg')} />
                                            </View>
                                        </View>
                                    </View> */}
              <View style={{flex: 1}}>
                <ScrollView>
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                  <ShareUserCard />
                </ScrollView>
              </View>
            </View>
            {/* </TouchableWithoutFeedback> */}
          </View>
          {/* </TouchableWithoutFeedback> */}
        </Modal>
      </View>
    );
  }
}

class ShareUserCard extends React.Component {
  render() {
    return (
      <View style={style.userInfo}>
        <View style={style.followPicView}>
          <Image
            source={require('./images/profilepic.jpg')}
            style={style.followPic}
          />
        </View>
        <View style={style.userInfoNames}>
          <Text style={{fontSize: 16, color: '#fff'}}>Bhavin Bhanushali</Text>
          <Text style={{fontSize: 12, color: '#fff'}}>@bhavin.bhanushali</Text>
        </View>
        <View style={style.followButtonView}>
          <TouchableOpacity style={[style.followButton]}>
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 14}}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    await fetch(`${IP}/v1/posts`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: this.props.route.params.token,
      },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        this.setState({
          posts: jsonResponse.result,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  //   navigateChat = () => {
  //     return this.props.navigation.navigate('Chat');
  //   };
  render() {
    return (
      <View style={style.dashboard}>
        <View style={style.header}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Entypo
              style={style.person_logo_icon}
              name="menu"
              size={30}
              color="#336dab"
            />
          </TouchableOpacity>
          <Text style={style.username}>G O Z Z B Y</Text>
          <TouchableOpacity
            style={style.person_logo}
            onPress={() =>
              this.props.navigation.navigate('Profile', {
                id: this.props.route.params.user._id,
                user: this.props.route.params.user,
                self: true,
                token: this.props.route.params.token
              })
            }>
            <Image
              style={style.person_logo_icon}
              source={{uri: this.props.route.params.user.profileImage}}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={style.message}
            onPress={() => this.props.navigation.navigate('Chat')}>
            <Ionicon
              style={style.message_icon}
              name="md-send"
              color="#fff"
              size={30}
            />
          </TouchableOpacity> */}
        </View>
        <View style={style.content}>
          <FlatList
            data={this.state.posts}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{flexGrow: 1}}
            ListEmptyComponent={<NoAccountsFound />}
            renderItem={({item}) => (
              <PostCard
                profileImage={this.props.route.params.user.profileImage}
                post={item}
                token={this.props.route.params.token}
                navigation={this.props.navigation}
              />
            )}
          />
          {/* <ScrollView showsVerticalScrollIndicator={false}>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </ScrollView> */}
        </View>
      </View>
    );
  }
}

class NoAccountsFound extends React.Component {
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
          No Posts Yet
        </Text>
      </View>
    );
  }
}
