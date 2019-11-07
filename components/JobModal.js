import React, { Component } from 'react';
import Colors from '../constants/Colors';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function JobModal(props) {
  return (
    <View style={{ marginTop: 22}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
        >
        <View style={{ marginTop: 30 }}>
          <View style={styles.modal}>
             <TouchableHighlight onPress={props.onPressOut}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
                size={40}
              />
            </TouchableHighlight>

            <View style={styles.textCont}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-paper-plane' : 'md-paper-plane'}
                style={styles.plane}
                size={100}
              />
            <Text style={styles.text} >We have alerted a volunteer. Someone will call shortly!</Text>

             <Text style={styles.textLine} >There are 2 people ahead of you line.</Text>

            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    paddingHorizontal: 30
  },
  textCont: {
    alignItems: 'center',
    marginTop: 100,
  },
  text: {
     fontSize: 20,
     paddingHorizontal: 50
  },
  textLine: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  plane: {
    color: Colors.blue3
  }
});

export default JobModal;
