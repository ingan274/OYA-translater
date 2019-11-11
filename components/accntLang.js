import React, { Component } from 'react';
import Colors from '../constants/Colors';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';

function AccountTitle (props) {
  return (
    <View style={styles.container}> 
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.language}><Text style={styles.languageTitle}>Languages:</Text> {props.language1} {props.language2} {props.language3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: Colors.blue4,
    fontSize: 35,
    
  },
  languageTitle: {
    color: Colors.blue4,
    fontSize: 15,
  },
  language: {
    color: Colors.softRed,
    fontSize: 15,
    paddingTop: 5
  },
  constainer: {
    flex: 1,
    alignContent: "center"
  }
});

export default AccountTitle;