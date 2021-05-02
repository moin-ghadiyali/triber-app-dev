import React from 'react';
import {Image, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from '../SearchScreen/Search';
import Explore from '../ExploreScreen/Explore';
import Notification from '../NotificationScreen/Notification';
import Dashboard from '../DashboardScreen/Dashboard';
import Post from '../PostScreen/Post';
import DrawerNavigator from './DrawerNavigation';
import Profile from '../ProfileScreen/Profile';

const Tab = createMaterialBottomTabNavigator();

class BottomNavigator extends React.Component {
  render() {
    console.log(this.props.route.params.user.profileImage);
    return (
      <Tab.Navigator
        initialRouteName="Dashboard"
        inactiveColor="#7098c4"
        activeColor="#336DAB"
        barStyle={{
          margin: 0,
          backgroundColor: '#fff',
          paddingLeft: 0,
          borderTopWidth: 0.5,
          borderTopColor: '#336DAB',
        }}
        shifting={false}
        labeled={false}>
        <Tab.Screen
          name="Home"
          component={DrawerNavigator}
          initialParams={this.props.route.params}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="md-home" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          initialParams={this.props.route.params}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color}) => (
              <Icon name="md-search" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={Post}
          initialParams={this.props.route.params}
          options={{
            tabBarLabel: 'Post',
            tabBarIcon: ({color}) => (
              <Icon name="md-add-circle-outline" color={color} size={25} />
            ),
          }}
        />
        {/* <Tab.Screen
                    name="Notification"
                    component={Notification}
                    initialParams={this.props.route.params}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color }) => <Icon name='md-notifications' color={color} size={25} />
                    }} /> */}
      </Tab.Navigator>
    );
  }
}

export default BottomNavigator;
