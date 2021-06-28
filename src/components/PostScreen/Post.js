import axios from 'axios';
import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {FAB, Provider, Portal} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {IP} from '../constants';
import {customFontRegular} from '../Font';
import style from './style';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: '',
      location: '',
      image: {
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi84Vu2kADqkusC_YxUJzS-Kx4gml6LTBz8A&usqp=CAU',
      },
      fabStatus: false,
    };
  }

  async imageUpload() {
    const data = new FormData();
    data.append('image', {
      uri: this.state.image.uri,
      type: this.state.image.type,
      name: this.state.image.fileName,
    });
    data.append('caption', this.state.caption);
    data.append('location', this.state.location);
    await axios
      .post(`${IP}/v1/postimage`, data, {
        headers: {
          Accept: '*/*',
          'Content-Type': 'multipart/form-data',
          token: this.props.route.params.token,
        },
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        alert('Post Uploaded!');
      });
  }

  async imageUploadCamera() {
    launchCamera(
      {
        maxWidth: 400,
        maxHeight: 400,
        mediaType: 'photo',
      },
      (image) => {
        console.log(image);
        this.setState({
          image: image,
        });
      },
    );
  }

  async imageUploadGallery() {
    launchImageLibrary(
      {
        maxWidth: 400,
        maxHeight: 400,
        mediaType: 'photo',
      },
      (image) => {
        console.log(image);
        this.setState({
          image: image,
        });
      },
    );
    // .then((image) => {
    //   this.setState({
    //     image: image,
    //   });
    //   console.log(image);
    // })
    // .catch((e) => {
    //   console.log(e);
    // });
  }

  render() {
    return (
      <View style={style.editScreen}>
        {/* <Provider>
          <Portal> */}
            {/* <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={190}
          openDuration={250}
          closeOnDragDown={true}
          customStyles={{
            container: {
              alignItems: 'center',
            },
          }}>
          <TouchableOpacity onPress={() => this.imageUploadCamera()}>
            <Text style={{color: '#336DAB', padding: 10, fontSize: 20}}>
              Camera
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.imageUploadGallery()}>
            <Text style={{color: '#336DAB', padding: 10, fontSize: 20}}>
              Gallery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: '#336DAB', padding: 10, fontSize: 20}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </RBSheet> */}
            <View style={style.header}>
              <Text
                style={{
                  flex: 8,
                  color: '#336dab',
                  alignSelf: 'center',
                  fontSize: 20,
                  left: 10,
                  fontFamily: customFontRegular,
                }}>
                Post Image
              </Text>
              <TouchableOpacity
                onPress={(e) => this.imageUpload()}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="check" size={30} color="#336dab" />
              </TouchableOpacity>
            </View>
            <View style={style.content}>
              <FAB.Group
                open={this.state.fabStatus}
                icon={this.state.fabStatus ? 'minus' : 'plus'}
                actions={[
                  {
                    icon: 'camera',
                    color: '#336dab',
                    onPress: () => this.imageUploadCamera(),
                  },
                  {
                    icon: 'image',
                    color: '#336dab',
                    onPress: () => this.imageUploadGallery(),
                  },
                ]}
                onStateChange={() =>
                  this.setState({fabStatus: !this.state.fabStatus})
                }
                color="#336dab"
                fabStyle={{backgroundColor: '#fff'}}
                theme={{
                  animation: {scale: 1},
                  colors: {backdrop: 'transparent'},
                }}
                style={{borderWidth: 0.2, backgroundColor: '#fff'}}
              />
              <View
                style={{
                  width: '100%',
                  height: Dimensions.get('window').width,
                }}>
                {/* <TouchableOpacity onPress={() => this.RBSheet.open()}> */}
                <Image
                  source={{uri: this.state.image.uri}}
                  style={style.image}
                />
                {/* </TouchableOpacity> */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Entypo name="text" size={20} color="#336dab" />
                <TextInput
                  placeholder="Caption..."
                  placeholderTextColor="#000"
                  numberOfLines={3}
                  style={style.input}
                  value={this.state.caption}
                  onChange={(e) => this.setState({caption: e.nativeEvent.text})}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Entypo name="location" size={20} color="#336dab" />
                <TextInput
                  placeholder="Location"
                  placeholderTextColor="#000"
                  numberOfLines={3}
                  style={style.input}
                  value={this.state.location}
                  onChange={(e) =>
                    this.setState({location: e.nativeEvent.text})
                  }
                />
              </View>
            </View>
          {/* </Portal>
        </Provider> */}
      </View>
    );
  }
}
