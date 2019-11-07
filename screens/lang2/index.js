import style from './style';
import React, { PureComponent } from 'react';
import Langbtn from '../../components/Langbtn.js';
import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class Lang1 extends PureComponent {
  componentDidMount() {
    console.log('About did mount');
  }

  componentWillUnmount() {
    console.log('About Unmounted');
  }

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
          <View style={style.dotContainer}>
            <Image
              source={require('../../assets/images/dots.png')}
              style={style.dots}
            />
          </View>
          <Ionicons
            name={
              Platform.OS === 'ios' ? 'ios-person' : 'md-person'
            }
            size={30}
            style={style.account}
            onPress={this.handleAccount}
          />
        </View>

        <Langbtn btntext="English" onPress={this.handleTransLanguage} />
        <Langbtn btntext="Spanish" onPress={this.handleTransLanguage} />
        <Langbtn btntext="Chinese" onPress={this.handleTransLanguage} />
        <Langbtn btntext="French" onPress={this.handleTransLanguage} />
        <Langbtn btntext="Farsi" onPress={this.handleTransLanguage} />
      </View>
    );
  }

  handleAccount = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('AccountLogIn');
  };

  handleBackPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Home');
  };

  handleTransLanguage = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('JobsStack');
  };
}

export default Lang1;
