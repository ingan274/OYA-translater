import style from './style';
import React, { PureComponent } from 'react';
import Btn from '../../components/button';
import JobModal from '../../components/JobModal';
import { Ionicons } from '@expo/vector-icons';
import color from '../../constants/Colors';
import {
  Image,
  Platform,
  Text,
  View,
  AsyncStorage
} from 'react-native';

class Job extends PureComponent {
  state = {
    modalVisible: false,
  };

  static navigationOptions = {
    drawerLabel: 'Logout',
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name={Platform.OS === 'ios' ? 'ios-log-out' : 'md-log-out'}
        size={30}
        color={color.blue2}
      />
    ),
  };

  componentDidMount = () => {
    // GETTING RID OF INFO IN LOCAL STORAGE
    this.removeVData()
    this.logout()
  }

  logout = async () => {

    try {
      let socket = await AsyncStorage.getItem('socket');

      fetch('https://oyabackend.herokuapp.com/volunteer/', {
      method: 'PUT',
      body: JSON.stringify({
        mysqlID: `${socket}`,
        massageAvail: false,
      })
        .then(res => res.json())
        .catch(err => console.warn(err)),
    });
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
    
  }

  removeVData = async () => {
    try {
      await AsyncStorage.removeItem('firstname');
      await AsyncStorage.removeItem('lastname');
      await AsyncStorage.removeItem('language1');
      await AsyncStorage.removeItem('language2');
      await AsyncStorage.removeItem('language3');
      console.log("removal of volunteer info success")
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  render() {

    return (
      <View style={style.container}>
        <Image style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} source={require('../../assets/images/logoutback.jpeg')} />
        <View style={style.textContainer}>
          <Text style={style.headerTitle}>You Have Successfully Logged Out</Text>
        </View>
        <View style={style.ButtonContainer}>
          <Btn
            btntext="Back to Home"
            onPress={this.handleHome}
            icon="home"
          />
          <Btn
            btntext="Go to Login"
            onPress={this.handleLogin}
            icon="log-in"
          />
        </View>
      </View>
    );
  }

  handleHome = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Home');
  };

  handleLogin = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Login');
  };

}

export default Job;