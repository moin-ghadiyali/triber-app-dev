import React from 'react';
import { styleheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import style from './style';
import { Content, Item, Input, Root } from 'native-base'
import { Grid, Col } from 'react-native-easy-grid'

export default class OTP extends React.Component {
    renderInputs() {
        return (
            <View>
                <Input style={[style.inputRadius, { borderRadius: 10 }]} keyboardType="numeric" />
            </View>
        )
    }
    render() {
        return (
            <SafeAreaView>
                <View style={style.otp}>
                    <Text style={style._title}>OTP</Text>
                    <View style={style.form}>
                        <View>
                            <Input style={[style.inputRadius, { borderRadius: 10 }]} keyboardType="numeric" />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}