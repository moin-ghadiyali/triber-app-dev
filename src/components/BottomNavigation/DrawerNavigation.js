import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Dashboard from '../DashboardScreen/Dashboard';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../ProfileScreen/Profile';
import Saved from '../SavedScreen/Saved';
const Drawer = createDrawerNavigator();

class DrawerNavigator extends React.Component {
  render() {
    return (
      <Drawer.Navigator
        initialRouteName="Dashboard"
        drawerPosition="left"
        minSwipeDistance={50}
        overlayColor="rgba(0,0,0,0.6)"
        shifting={false}
        labeled={false}
        backBehavior='none'
        >
        <Drawer.Screen
          name="Home"
          component={Dashboard}
          initialParams={this.props.route.params}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({color}) => (
              <Icon name="md-home" color={color} size={25} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          initialParams={{user: this.props.route.params.user, self: true}}
          options={{
            drawerLabel: 'Profile',
            drawerIcon: ({color}) => (
              <FontAwesome name="user-circle-o" color={color} size={25} />
            ),
          }}
        />
        <Drawer.Screen
          name="Saved"
          component={Saved}
          initialParams={{user: this.props.route.params.user, self: true}}
          options={{
            drawerLabel: 'Saved',
            drawerIcon: ({color}) => (
              <FontAwesome name="bookmark" color={color} size={25} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigator;
