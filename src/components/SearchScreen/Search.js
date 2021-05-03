import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import style from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { IP } from '../constants';
import { customFontRegular } from '../Font';

const Tab = createMaterialTopTabNavigator();

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchResults: [],
    };
  }

  async search(value) {
    this.setState({
      search: value,
    });
    if (value.trim() == '') {
      this.setState({
        searchResults: [],
      });
    } else {
      await fetch(`${IP}/v1/search`, {
        body: JSON.stringify({
          search: value,
        }),
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          token: this.props.route.params.token,
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson.result);
          this.setState({
            searchResults: responseJson.result,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    let cancel;
    if (this.state.search != '') {
      cancel = (
        <View style={style.searchIcon}>
          <Entypo
            name="cross"
            size={25}
            color="#336dab"
            style={{alignSelf: 'center'}}
            onPress={() => {
              this.textInput.clear();
              this.setState({
                search: '',
                searchResults: [],
              });
            }}
          />
        </View>
      );
    } else {
      cancel = <View style={style.searchIcon}></View>;
    }
    return (
      <View style={style.search}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 0.3,
            shadowColor: '#000000',
            shadowOpacity: 0.9,
            shadowRadius: 1,
            shadowOffset: { width: 0, height: 10 },
            elevation: 5
          }}>
          <View style={style.searchIcon}>
            <Icon
              name="md-search"
              size={25}
              color="#336dab"
              style={{alignSelf: 'center'}}
            />
          </View>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#ccc"
            style={style.searchBar}
            value={this.state.search}
            clearButtonMode="always"
            ref={(input) => {
              this.textInput = input;
            }}
            onChange={(e) => this.search(e.nativeEvent.text)}
          />
          {cancel}
        </View>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <FlatList
          data={this.state.searchResults}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{flexGrow: 1}}
          ListEmptyComponent={<NoAccountsFound />}
          renderItem={({item}) => (
            <SearchedAccounts user={item} navigation={this.props.navigation} token={this.props.route.params.token} />
          )}
        />
        {/* </ScrollView> */}
        {/* <TobBarNav /> */}
      </View>
    );
  }
}

class Accounts extends React.Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
        </View>
      </ScrollView>
    );
  }
}

class Top extends React.Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
        </View>
      </ScrollView>
    );
  }
}

class Hashtags extends React.Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
          <SearchedAccounts />
        </View>
      </ScrollView>
    );
  }
}

class SearchedAccounts extends React.Component {
  render() {
    console.log(this.props.user.fullname);
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('Profile', {
            id: this.props.user._id,
            user: this.props.user,
            self: false,
            token: this.props.token
          })
        }
        style={style.searchedUser}>
        <View style={style.pic}>
          <Image
            source={{uri: this.props.user.profileImage}}
            style={style.profileImage}
          />
        </View>
        <View style={style.searchText}>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              fontFamily: customFontRegular,
            }}>
            {this.props.user.fullname}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: '#000',
              fontFamily: customFontRegular,
            }}>
            @{this.props.user.username}
          </Text>
        </View>
      </TouchableOpacity>
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
          name="account-search-outline"
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
          Users
        </Text>
      </View>
    );
  }
}

class TobBarNav extends React.Component {
  render() {
    return (
      <Tab.Navigator
        style={{position: 'relative', fontFamily: customFontRegular}}
        initialRouteName="Top"
        tabBarOptions={{
          style: {
            backgroundColor: '#fff',
          },
          labelStyle: {fontSize: 15},
          showLabel: true,
          showIcon: true,
          indicatorStyle: {
            borderBottomColor: '#336dab',
            borderBottomWidth: 1,
          },
        }}>
        {/* <Tab.Screen name="Top" component={Top} /> */}
        <Tab.Screen name="Accounts" component={Accounts} />
        {/* <Tab.Screen name="Hashtags" component={Hashtags} /> */}
      </Tab.Navigator>
    );
  }
}
