import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import style from './style';
import { customFontRegular } from '../Font';

export default class ChatRoom extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={style.header}>
                    <TouchableOpacity style={style.back} onPress={() => this.props.navigation.pop()}>
                        <Icon name='ios-arrow-back' size={30} color='#fff' />
                    </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <Image source={require('./images/selfprofilepic.jpg')} style={{ height: 30, width: 30, borderRadius: 50, borderWidth: 0.6, borderColor: '#fff', alignSelf: 'center', }} />
                    </View>
                    <View style={{ flex: 7, justifyContent: 'center', }}>
                        <Text style={{ color: '#fff', fontSize: 15, left: 10, fontFamily: customFontRegular, }}>moinghadiyali</Text>
                    </View>
                    <TouchableOpacity style={style.groupAdd}>
                        <Feather name='info' size={30} color='#fff' />
                    </TouchableOpacity>
                </View>
                <View style={[style.content]}>
                    <View style={{ flex: 9 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ padding: 8 }}>
                                <Text style={style.chatBubble}>Hello</Text>
                                <Text style={style.chatBubbleUser}>Hello</Text>
                                <Text style={style.chatBubble}>How are you?</Text>
                                <Text style={style.chatBubbleUser}>Im Fine, mf.</Text>
                                <Text style={style.chatBubbleUser}>How's your girl, btw?</Text>
                                <Text style={style.chatBubble}>She's just fine, you know. Well, how bout yours?</Text>
                                <Text style={style.chatBubble}>Oh wait, i forgot you don't have any. My bad. Hahahahahahah</Text>
                                <Text style={style.chatBubbleUser}>Destruction 100 to me</Text>
                                <Text style={style.chatBubbleUser}>Light travels faster than sound. This is why some people appear bright until they speak.</Text>
                                <Text style={style.chatBubble}>It’s okay if you don’t like me. Not everyone has good taste.</Text>
                                <Text style={style.chatBubbleUser}>Mirrors can’t talk, lucky for you they can’t laugh either.</Text>
                                <Text style={style.chatBubble}>I’m not saying I hate you, what I’m saying is that you are literally the Monday of my life.</Text>
                                <Text style={style.chatBubbleUser}>Sarcasm is the secret language that everyone uses when they want to say something mean to your face.</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{paddingTop: 6, paddingBottom: 6, backgroundColor: 'rgba(0,0,0,0)'}}>
                        <View style={style.textInputBar}>
                            <TextInput placeholder='Type your message...' placeholderTextColor='#336dab' style={{ flex: 9, padding: 10, alignSelf: 'center', }} />
                            <TouchableOpacity style={{ flex: 1 }}>
                                <Icon name='md-send' size={25} color='#336dab' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}