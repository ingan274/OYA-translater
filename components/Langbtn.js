import React, { Component } from 'react';
import Colors from '../constants/Colors';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function LangButton(props) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        // onPress={navigation}
      >
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
    marginTop: 30,
    borderRadius: 10,
    marginHorizontal: 50
  },
  btntext: {
    color: Colors.white,
    fontSize: 20
  },
});

export default LangButton;
