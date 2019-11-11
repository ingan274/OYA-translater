import React, { Component } from 'react';
import Colors from '../../constants/Colors';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';


function LoginForm(props) {
    return (
        <TextInput
            selectionColor={Colors.blue3}
            style={styles.textInput}
            placeholder={props.placeholder}
            autoCorrect={props.autoCorrect}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            autoCorrect={props.autoCorrect}
            onChangeText={props.onChangeText}
            onSubmitEditing={props.onSubmitEditing}
        />
    );
}


const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: Colors.SILVER,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    }
});

export default LoginForm;