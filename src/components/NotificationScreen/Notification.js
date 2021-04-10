import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Tab = createMaterialTopTabNavigator();

export default class Notification extends React.Component {
    render() {
        return (
            <View style={style.notification}>
                <View style={style.header}>
                    <Text style={{ flex: 1, color: '#fff', textAlign: 'center', fontSize: 20, alignSelf: 'center' }}>Activities</Text>
                </View>
                <View style={style.content}>
                    <TobBarNav />
                </View>
            </View>
        )
    }
}

class Activity extends React.Component {
    render() {
        return (
            <View>

            </View>
        )
    }
}

class Notifications extends React.Component {
    render() {
        return (
            <View>

            </View>
        )
    }
}

class FriendRequests extends React.Component {
    render() {
        return (
            <View>

            </View>
        )
    }
}

class TobBarNav extends React.Component {
    render() {
        return (
            <Tab.Navigator
                style={{ position: 'relative' }}
                initialRouteName='Notifications'
                tabBarOptions={{
                    style: {
                        backgroundColor: '#fff',
                    },
                    labelStyle: { fontSize: 15 },
                    showLabel: false,
                    showIcon: true,
                    indicatorStyle: {
                        borderBottomColor: '#336dab',
                        borderBottomWidth: 1
                    }
                }}
            >
                <Tab.Screen
                    name="Activity"
                    component={Activity}
                    options={{
                        tabBarLabel: 'Activity',
                        tabBarIcon: () => <Feather name='activity' size={20} color='#336dab' />,
                    }}
                />
                <Tab.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{
                        tabBarLabel: 'Activity',
                        tabBarIcon: () => <MaterialIcons name='notifications-none' size={20} color='#336dab' />,
                    }}
                />
                <Tab.Screen
                    name="Requests"
                    component={FriendRequests}
                    options={{
                        tabBarLabel: 'Activity',
                        tabBarIcon: () => <Feather name='user-plus' size={20} color='#336dab' />,
                    }}
                />
            </Tab.Navigator>
        )
    }
}