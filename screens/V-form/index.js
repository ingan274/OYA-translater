import style from './style';
import React, { PureComponent } from './node_modules/react';
import Langbtn from '../../components/Langbtn.js';
import { Ionicons } from './node_modules/@expo/vector-icons';
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

class Message extends PureComponent {
  componentDidMount() {
    console.log('Chatroom did mount');
  }

  componentWillUnmount() {
    console.log('Chatroom Unmounted');
  }

  static navigationOptions = {
    title: 'Chatroom',
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
        <Text>This is the chatroom</Text>
      </View>
    );
  }

}

export default Message;
