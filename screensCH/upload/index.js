import style from './style';
import React, { PureComponent } from 'react';
import { Ionicons } from '@expo/vector-icons';
import color from '../../constants/Colors';
import imageLogo from "../../assets/images/dots.png";
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

  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Ionicons
            name={
              Platform.OS === 'ios' ? 'ios-arrow-dropleft' : 'md-arrow-dropleft'
            }
            size={30}
            style={style.back}
            onPress={this.handleBackPress}
          />
        </View>
        <Text style={style.title}>文件审查</Text>
        <Image source={imageLogo} style={style.logo} />
        <View style={style.Textcontainer}>
          <TouchableOpacity
            style={style.button}
          >
            <Ionicons
              name={
                Platform.OS === 'ios'
                  ? "ios-camera"
                  : "ios-camera"
              }
              size={40}
              color={color.white}
            />
            <Text style={style.btntext}> 拍摄文件照片 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
          >
            <Ionicons
              name={
                Platform.OS === 'ios'
                  ? "ios-document"
                  : "ios-document"
              }
              size={40}
              color={color.white}
            />
            <Text style={style.btntext}> 上传文件 </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


  handleBackPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Jobs');
  };

}

export default Message;
