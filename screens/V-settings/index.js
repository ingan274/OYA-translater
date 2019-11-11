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

  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
        size={30}
        color={color.blue2}
      />
    ),
  };

  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity
          onPress={this.handleMenu} // navigation
        >
          <View style={style.drawernav}>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
              size={40}
              style={style.menu}
              color={color.blue2}
            />
          </View>
        </TouchableOpacity>
        <View styles={style.textcontainer}>
          <Text style={style.text}>Pretend settings will go here</Text>
        </View>
      </View>
    );
  }

  handleMenu = () => {
    this.props.navigation.openDrawer();
  };
}

export default Message;
