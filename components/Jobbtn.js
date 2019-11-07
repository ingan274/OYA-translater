import React, { Component } from 'react';
import Colors from '../constants/Colors';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Jobbtn (props) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress} // navigation
      >
      <Ionicons
            name={
              Platform.OS === 'ios'
                ? `ios-${props.icon}`
                : `md-${props.icon}`
            }
            size={35}
            color={Colors.white}
          />
        <Text style={styles.btntext}>{props.btntext}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.blue4,
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginBottom: 30,
    borderRadius: 10,
    marginHorizontal: 50
  },
  btntext: {
    color: Colors.white,
    fontSize: 20
  },
});

export default Jobbtn;
