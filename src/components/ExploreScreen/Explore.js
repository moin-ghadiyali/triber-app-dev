import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import style from './style';
import Icon from 'react-native-vector-icons/Ionicons';

 export default class Explore extends React.Component {
    render() {
        return(
            <View style={style.explore}>
                <View style={style.header}>
                    <Text style={{flex: 1, color: '#fff', textAlign: 'center', fontSize: 20, alignSelf: 'center'}}>Explore</Text>
                </View>
                <View style={style.content}>

                </View>
            </View>
        )
    }
}