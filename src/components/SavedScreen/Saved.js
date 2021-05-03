import React from 'react';
import {
  styleheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  FlatList,
} from 'react-native';
import style from './style';
import {Content, Item, Input, Root} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Grid, Col} from 'react-native-easy-grid';
import {customFontRegular} from '../Font';
import {IP} from '../constants';

export default class Saved extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarks: [],
    };
  }

  componentDidMount() {
    // fetch(`${IP}/v1/bookmarks`, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     token: this.props.route.params.token,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((jsonResponse) => {
    //     this.setState({
    //       bookmarks: jsonResponse.result,
    //     });
    //     console.log(jsonResponse.result)
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    fetch(`${IP}/v1/posts`, {
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
          bookmarks: jsonResponse.result,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <SafeAreaView>
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
            Saved Posts
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: '#fff',
          }}>
          <FlatList
            data={this.state.bookmarks}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{flexGrow: 1}}
            ListEmptyComponent={<NoSavedsFound />}
            renderItem={({item}) => <ShortPostCards urlNew={item.postImage} />}
          />
        </View>
      </SafeAreaView>
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

class NoSavedsFound extends React.Component {
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
          No Saved Posts Yet
        </Text>
      </View>
    );
  }
}
