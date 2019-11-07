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
        <View style={style.infoContainer}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline'}
            type="Feather"
            size={30}
            style={style.info}
            onPress={this.handleAbout}
          />
        </View>
        <View style={style.logoContainer}>
          <Image
            source={
              __DEV__
                ? require('../../assets/images/logo.png')
                : require('../../assets/images/logo.png')
            }
            style={style.logo}
          />
        </View>
        <Text style={style.subhead}>
          A peer to peer translation service that connects you with bilingual
          speakers
        </Text>

        <Langbtn btntext="English" onPress={this.handleLanguage}/>
        <Langbtn btntext="Español" onPress={this.handleLanguage} />
        <Langbtn btntext="中文" onPress={this.handleLanguage} />
      </View>
    );
  }

   handleAbout = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('About');
  };

   handleLanguage = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Language');
  };
}

export default Lang1;
