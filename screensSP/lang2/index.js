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

  static navigationOptions = {
    title: null,
  };

  render() {
    return (
      <View style={style.container}>
         <Image style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} source={require('../../assets/images/language.jpeg')}/>   
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
            name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
            size={30}
            style={style.account}
            onPress={this.handleAccount}
          />
        </View>
        <Text style={style.subhead}>¿Qué idioma necesitas traducir?</Text>
        <ScrollView>
          <Langbtn btntext="Inglés" value="English" onPress={this.handleTransLanguage("English")} />
          <Langbtn btntext="Español" value="Spanish" onPress={this.handleTransLanguage("Spanish")} />
          <Langbtn btntext="Chino"  value="Chinese"onPress={this.handleTransLanguage("Chinese")} />
          <Langbtn btntext="Francés" value="French" onPress={this.handleTransLanguage("French")} />
          <Langbtn btntext="Farsi"  value="Farsi" onPress={this.handleTransLanguage("Farsi")} />
        </ScrollView>
      </View>
    );
  }

  handleAccount = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('VolunteerLogIn');
  };

  handleBackPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Home');
  };

  handleTransLanguage = (language) => {
     // get language based on token/userid
     fetch('Heroku link will go here', {
      method: 'POST',
      data: {userlanguage: language}
    }).then(() => {
      const {
        navigation: { navigate },
      } = this.props;
      navigate('Jobs');
    })
      .catch(err => console.warn(err))
  }
}

export default Lang1;
