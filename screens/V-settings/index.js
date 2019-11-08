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

class Message extends PureComponent {
  componentDidMount() {
    console.log('Settings did mount');
  }

  componentWillUnmount() {
    console.log('Settings Unmounted');
  }

  static navigationOptions = {
    title: 'Account Settings',
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
        <Text>Pretend settings will go here</Text>
      </View>
    );
  }

}

export default Message;
