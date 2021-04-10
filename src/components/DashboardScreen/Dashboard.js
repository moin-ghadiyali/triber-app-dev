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
  TextInput,
  FlatList,
} from 'react-native';
import style from './style';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// import { TextInput } from "react-native-paper";

class PostCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: this.props.post,
      like: false,
      shareModal: false,
    };

    this.openShare = this.openShare.bind(this);
  }

  openShare = (visible) => {
    this.setState({shareModal: visible});
  };

  async like() {
    await fetch('http://192.168.2.8:3000/v1/like', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: this.props.token,
      },
      body: JSON.stringify({
        postId: this.state.post._id,
      })
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        if ((jsonResponse.message = 'Liked')) {
          this.setState({
            like: true,
          });
        } else {
          this.setState({
            like: false,
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    let like;
    if (this.state.like == false) {
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
              <Text style={style.name}>{this.state.post.user[0].fullname}</Text>
              <Text style={style.usernameNew}>
                @{this.state.post.user[0].username}
              </Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={style.userDataOptions}>
            <Ionicon style={{alignSelf: 'center'}} name="md-more" size={25} />
          </TouchableOpacity> */}
        </View>
        <TouchableHighlight
          style={style.image}
          // onLongPress={() => this.openShare(true)}
        >
          <Image
            style={style.postImage}
            source={{uri: this.state.post.postImage}}
          />
        </TouchableHighlight>
        <View style={style.postOptions}>
          {/* <MaterialCommunityIcons
            name="heart-outline"
            color="#8B0000"
            size={27}
            style={style.superLike}
          /> */}
          {like}
          <Feather
            name="message-circle"
            color="#336dab"
            size={27}
            style={style.comment}
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
                fontFamily: 'Montserrat-Bold',
              }}>
              @{this.state.post.user[0].username}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: '#000',
              textAlign: 'justify',
              fontSize: 13,
              fontFamily: 'Montserrat-Regular',
            }}>
            {this.state.post.caption}
          </Text>
        </View>
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
          <Text style={{fontSize: 16, color: '#fff'}}>Moin Ghadiyali</Text>
          <Text style={{fontSize: 12, color: '#fff'}}>@moinghadiyali</Text>
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
    await fetch('http://192.168.2.8:3000/v1/posts', {
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
          <Text style={style.username}>T R I B E R</Text>
          <TouchableOpacity
            style={style.person_logo}
            onPress={() =>
              this.props.navigation.navigate('Profile', {
                user: this.props.route.params.user,
                self: true,
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
              <PostCard post={item} token={this.props.route.params.token} navigation={this.props.navigation} />
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
        <MaterialCommunityIcons
          name="post-outline"
          size={70}
          color="#336dab"
          style={{alignSelf: 'center', opacity: 0.8}}
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 14,
            color: '#000',
            fontFamily: 'Montserrat-Regular',
          }}>
          Posts
        </Text>
      </View>
    );
  }
}
