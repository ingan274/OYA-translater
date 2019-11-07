import style from './style';
import React, { PureComponent } from 'react';
import Langbtn from '../../components/Langbtn.js';
import { Ionicons } from '@expo/vector-icons';
import color from '../../constants/Colors';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class Upload extends PureComponent {
  componentDidMount() {
    console.log('Chatroom did mount');
  }

  componentWillUnmount() {
    console.log('Chatroom Unmounted');
  }

   static navigationOptions = {
    title: 'Upload',
    headerStyle: {
      backgroundColor: color.blue4,
    },
    headerTintColor: color.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={style.container}>
        <Text>This is where you will uplod document (insert design but not active)</Text>
      </View>
    );
  }
}

export default Upload;
