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
        <View style={{ marginTop: 30, backgroundColor: Colors.blue4, flex:1 }}>
          <View style={styles.modal}>
             <TouchableHighlight onPress={props.onPressOut}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
                size={40}
                color={Colors.white}
                style={styles.exit}
              />
            </TouchableHighlight>

            <View style={styles.textCont}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-paper-plane' : 'md-paper-plane'}
                style={styles.plane}
                size={100}
              />
            <Text style={styles.text} >Hemos alertado a un voluntario. Alguien llamará en breve!</Text>

             <Text style={styles.textLine} >Hay 2 personas delante de ti.</Text>

            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    paddingHorizontal: 30,
  },
  exit: {
    marginTop: 10
  },
  textCont: {
    alignItems: 'center',
    marginTop: 100,
  },
  text: {
     fontSize: 20,
     paddingHorizontal: 50,
     color: Colors.white
  },
  textLine: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.white
  },
  plane: {
    color: Colors.blue2
  }
});

export default JobModal;
