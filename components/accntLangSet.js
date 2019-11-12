import React, { Component } from 'react';
import Colors from '../constants/Colors';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';

function AccountTitle (props) {
  return (
    <View > 
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.language}><Text style={styles.languageTitle}>Languages:</Text> {props.language1} {props.language2} {props.language3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: Colors.white,
    fontSize: 35,
    
  },
  languageTitle: {
    color: Colors.white,
    fontSize: 15,
  },
  language: {
    color: Colors.cream,
    fontSize: 15,
    paddingTop: 5
  }
});

export default AccountTitle;