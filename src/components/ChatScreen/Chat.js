import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView, Animated, Modal, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import style from './style';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Searchbar } from 'react-native-paper';
import { customFontRegular } from '../Font';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.navigateChat = this.navigateChat.bind(this);
    }

    navigateChat() {
        return this.props.navigation.navigate('ChatRoom');
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={style.header}>
                    <TouchableOpacity style={style.back} onPress={() => this.props.navigation.pop()}>
                        <Icon name='ios-arrow-back' size={30} color='#fff' />
                    </TouchableOpacity>
                    <Text style={{ flex: 8, color: '#fff', alignSelf: 'center', fontSize: 17, left: 10, fontFamily: customFontRegular }}>Direct</Text>
                    <TouchableOpacity style={style.groupAdd}>
                        <AntDesign name='addusergroup' size={30} color='#fff' />
                    </TouchableOpacity>
                </View>
                <View style={style.content}>
                    <ScrollView>
                        {/* <View style={style.view}>
                            <Icon name='md-search' size={25} color='#336dab' style={style.searchIcon} />
                            <TextInput
                                placeholder='Search...'
                                placeholderTextColor='#336dab'
                                style={style.search}
                            />
                        </View> */}
                        <View style={style.view}>
                            <Searchbar
                                style={style.search}
                                placeholder="Search..."
                                placeholderTextColor="#336dab"
                                iconColor='#336dab'
                                inputStyle={{fontSize: 15}}
                                clearButtonMode='while-editing'
                            />
                        </View>
                        <View style={style.userChats}>
                            <UserChat route={this.navigateChat} />
                            <UserChat route={this.navigateChat} />
                            <UserChat route={this.navigateChat} />
                            <UserChat route={this.navigateChat} />
                            <UserChat route={this.navigateChat} />
                            <UserChat route={this.navigateChat} />
                            <UserChat route={this.navigateChat} />
                            <UserChat route={this.navigateChat} />
                            <UserChat route={this.navigateChat} />
                            <UserChat route={this.navigateChat} />
                            <UserChat route={this.navigateChat} />
                            <UserChat route={this.navigateChat} />
                            <UserChat route={this.navigateChat} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export class UserChat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chatOptionsModal: false,
            chatOptionAnimated: new Animated.Value(400)
        }

        this.setChatOptionsModalVisible = this.setChatOptionsModalVisible.bind(this);
        this.translateChatOptionsAnimation = this.translateChatOptionsAnimation.bind(this);
    }

    setChatOptionsModalVisible(visible) {
        this.setState({ chatOptionsModal: visible });
        this.translateChatOptionsAnimation();
    }

    translateChatOptionsAnimation() {
        Animated.timing(this.state.chatOptionAnimated, {
            toValue: 0,
            delay: 100,
            duration: 300
        }).start()
    };

    RightActions = (progress, dragX) => {
        // const scale = dragX.interpolate({
        //     inputRange: [-100, 0],
        //     outputRange: [1, 0]
        //   })
        return (
            <>
                <TouchableOpacity disabled={false} activeOpacity={0.6} style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', }}>
                    <Animated.View
                        style={{
                            color: 'white',
                            paddingHorizontal: 10,
                            width: 60,
                            fontWeight: '600',
                            textAlign: 'center'
                            // transform: [{ scale }]
                        }}>
                        <AntDesign name='delete' color='#fff' size={20} style={{ alignSelf: 'center' }} />
                    </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'green', justifyContent: 'center' }}>
                    <Animated.View
                        style={{
                            color: 'white',
                            paddingHorizontal: 10,
                            fontWeight: '600',
                            width: 60,
                            textAlign: 'center'
                            // transform: [{ scale }]
                        }}>
                        <Octicons name='archive' color='#fff' size={20} style={{ alignSelf: 'center' }} />
                    </Animated.View>
                </TouchableOpacity>
            </>
        )
    }

    render() {
        return (
            <View>
                <Swipeable renderRightActions={this.RightActions}>
                    <TouchableOpacity style={style.card} onPress={this.props.route} onLongPress={() => { this.setChatOptionsModalVisible(true) }}>
                        <View style={style.profilePic}>
                            <Image source={require('./images/selfprofilepic.jpg')} style={style.pic} />
                        </View>
                        <View style={style.info}>
                            <Text style={{ fontSize: 12, color: '#000', fontFamily: customFontRegular }}>moinghadiyali</Text>
                            <Text numberOfLines={1} style={{ fontSize: 12, color: 'rgba(0,0,0,0.5)', fontFamily: customFontRegular }}>Hello there i amnew akwnlnf awdafnlanlawdlan awlnalwfnalwnafd awdf </Text>
                            <Text style={{ fontSize: 10, color: 'rgba(0,0,0,0.5)', fontFamily: customFontRegular }}>16m</Text>
                        </View>
                        <View style={style.streak}>
                            <Text style={{ fontSize: 12, fontFamily: customFontRegular }}>10</Text>
                            <Image source={require('./images/streat.png')} style={style.streakImage} />
                        </View>
                    </TouchableOpacity>
                </Swipeable>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.chatOptionsModal}
                    onRequestClose={() => {
                        this.setChatOptionsModalVisible(!this.state.chatOptionsModal);

                    }}
                >
                    <TouchableWithoutFeedback onPress={() => { this.setChatOptionsModalVisible(!this.state.chatOptionsModal); }}>
                        <View style={style.modal}>
                            <TouchableWithoutFeedback onPress={() => { }}>
                                <Animated.View style={[style.modalBox, { translateY: this.state.chatOptionAnimated }]}>
                                    <View style={{ borderColor: '#fff', borderWidth: 2, borderRadius: 5, width: 70, alignSelf: 'center' }}></View>
                                    <View style={{ flex: 1, flexDirection: 'row', padding: 15, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('./images/selfprofilepic.jpg')} style={{ borderRadius: 50, height: 90, width: 90, alignSelf: 'center', right: 5 }} />
                                        <View style={{ flexDirection: 'column', }}>
                                            <Text style={{ color: '#fff', fontSize: 17, left: 5 }}>Moin Ghadiyali</Text>
                                            <Text style={{ color: '#fff', fontSize: 14, left: 5 }}>@moinghadiyali</Text>
                                        </View>
                                    </View>
                                    <View style={{ borderWidth: 0.5, width: '90%', borderColor: '#fff', borderRadius: 5, alignSelf: 'center', }}></View>
                                    <View style={style.chatOptions}>
                                        <TouchableOpacity style={style.chatOptionsButton}>
                                            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>Mark As Unread</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={style.chatOptionsButton}>
                                            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>Delete</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={style.chatOptionsButton}>
                                            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>Mute Messages</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={style.chatOptionsButton}>
                                            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>Block</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Animated.View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        )
    }
}