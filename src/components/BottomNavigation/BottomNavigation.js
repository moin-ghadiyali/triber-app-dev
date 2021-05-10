import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import Dashboard from '../DashboardScreen/Dashboard';
import Notification from '../NotificationScreen/Notification';
import Post from '../PostScreen/Post';
import Saved from '../SavedScreen/Saved';
import Search from '../SearchScreen/Search';

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
        shifting={true}
        sceneAnimationEnabled={false}>
        <Tab.Screen
          name="Home"
          component={Dashboard}
          initialParams={this.props.route.params}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="md-home-outline" color={color} size={25} />
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
              <Icon name="md-search-outline" color={color} size={25} />
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
        <Tab.Screen
          name="Notifications"
        component={Notification}
          initialParams={this.props.route.params}
          options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({color}) => (
              <Icon name="notifications-outline" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          initialParams={this.props.route.params}
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon: ({color}) => (
              <Icon name="md-bookmark-outline" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomNavigator;
