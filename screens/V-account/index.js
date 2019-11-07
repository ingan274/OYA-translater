import React from 'react';
import { Switch, Text, View, StyleSheet, Platform, Image } from 'react-native';
import colors from '../../constants/Colors';
import style from './style';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  state = {
    messageValue: false,
    phoneValue: false,
    documentValue: false,
  };

  toggleMessage = value => {
    this.setState({ messageValue: value });
  };

  togglePhone = value => {
    this.setState({ phoneValue: value });
  };

  toggleDocument = value => {
    this.setState({ documentValue: value });
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.row}>
          <Image
            source={
              __DEV__
                ? require('../../assets/images/logo.png')
                : require('../../assets/images/logo.png')
            }
            style={style.image}
          />
        </View>
        <View style={style.row}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-text' : 'md-text'}
            size={40}
            color={colors.bluegrey}
          />
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-call' : 'me-call'}
            size={40}
            color={colors.bluegrey}
          />
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'}
            size={40}
            color={colors.bluegrey}
          />
        </View>

        <Text style={style.availTitle}>My Availability</Text>
        <View style={style.row}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-text' : 'md-text'}
            size={40}
            color={colors.blue3}
          />
          <Switch
            onValueChange={this.toggleMessage}
            value={this.state.messageValue}
          />
        </View>

        <View style={style.row}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-call' : 'me-call'}
            size={40}
            color={colors.blue3}
          />
          <Switch
            onValueChange={this.togglePhone}
            value={this.state.phoneValue}
          />
        </View>

        <View style={style.row}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'}
            size={40}
            color={colors.blue3}
          />
          <Switch
            onValueChange={this.toggleDocument}
            value={this.state.documentValue}
          />
        </View>
      </View>
    );
  }
}
