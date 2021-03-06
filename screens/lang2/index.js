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
  AsyncStorage
} from 'react-native';

class Lang1 extends PureComponent {

  static navigationOptions = {
    title: null,
  };

  render() {
    return (
      <View style={style.container}>
        <Image style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} source={require('../../assets/images/language.jpeg')} />
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
        <Text style={style.subhead}>What language do you need translated?</Text>
        <ScrollView>
          <Langbtn btntext="English" value="English" onPress={() => this.handleTransLanguage("English")} />
          <Langbtn btntext="Spanish" value="Spanish" onPress={() => this.handleTransLanguage("Spanish")} />
          <Langbtn btntext="Chinese" value="Chinese" onPress={() => this.handleTransLanguage("Chinese")} />
          {/* <Langbtn btntext="French" value="French" onPress={() => this.handleTransLanguage("French")} />
          <Langbtn btntext="Farsi" value="Farsi" onPress={() => this.handleTransLanguage("Farsi")} /> */}
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
    // HANDLE SAVE TO STORAGE
    this.handleLOCALSTORAGE(language)
    // NAV
    const {
      navigation: { navigate },
    } = this.props;
    navigate("Jobs");

  }

  handleLOCALSTORAGE = async (language) => {
    console.log("language", language)
    // save language (NATIVE) in local storage
    try {
      await AsyncStorage.setItem('language', `${language}`);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }
}

export default Lang1;
