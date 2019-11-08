import React from 'react';
import { Switch, Text, View, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native';
import colors from '../../constants/Colors';
import NameLang from '../../components/accntLang';
import style from './style';
import { Ionicons } from '@expo/vector-icons';

export default class Account extends React.Component {
  state = {
    messageValue: false,
    phoneValue: false,
    documentValue: false,
    messageNotification: true,
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

  // this.props.navigation.openDrawer();
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
              color={colors.blue2}

            />
          </View>
        </TouchableOpacity>
        <View style={style.Profilerow}>
          <Image
            source={require('../../assets/images/roboicon.png')}
            style={style.image}
          />
          <NameLang
            name="Isabel Ngan"
            language1="English"
            language2="Chinese"
            language3="Spanish"
          />
        </View>

        <View style={style.availrow}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-text' : 'md-text'}
            size={40}
            color={colors.blue2}
          />
          <Switch
            onValueChange={this.toggleMessage}
            value={this.state.messageValue}
          />
        </View>

        <View style={style.availrow}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-call' : 'me-call'}
            size={40}
            color={colors.blue2}
          />
          <Switch
            onValueChange={this.togglePhone}
            value={this.state.phoneValue}
          />
        </View>

        <View style={style.availrow}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'}
            size={40}
            color={colors.blue2}
          />
          <Switch
            onValueChange={this.toggleDocument}
            value={this.state.documentValue}
          />
        </View>
        <View style={style.availrow}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-text' : 'md-text'}
            size={40}
            style={style.message}
            color={this.state.messageNotification ? colors.blue4 : colors.bluegrey}
          />
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-alert' : 'md-alert'}
            size={22}
            style={this.state.messageNotification ? style.Notification : style.noneNotification}
            color="red"
          />
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-arrow-dropright-circle' : 'me-arrow-dropright-circle'}
            size={40}
            color={colors.white}
          // onPress={this.}
          />
        </View>

        <View style={style.availrow}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-call' : 'me-call'}
            size={40}
            color={colors.bluegrey}
          />
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-arrow-dropright-circle' : 'me-arrow-dropright-circle'}
            size={40}
            color={colors.white}
          // onPress={this.}
          />
        </View>

        <View style={style.availrow}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'}
            size={40}
            color={colors.bluegrey}
          />
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-arrow-dropright-circle' : 'me-arrow-dropright-circle'}
            size={40}
            color={colors.white}
          // onPress={this.}
          />
        </View>
      </View>
    );
  }

  handleMenu = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate.openDrawer() ;
  };
}