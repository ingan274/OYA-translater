import style from './style';
import React, { PureComponent } from 'react';
import Jobbtn from '../../components/Jobbtn';
import JobModal from '../../components/JobModalSP';
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
  Modal,
  TouchableHighlight,
  Alert,
  AsyncStorage
} from 'react-native';

class Job extends PureComponent {
  state = {
    modalVisible: false,
  };

  static navigationOptions = {
    title: 'Asistencia',
    headerStyle: {
      backgroundColor: color.blue4,
    },
    headerTintColor: color.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

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
        </View>
        <View style={style.titleContainer}>
          <Text style={style.headerTitle}>Asistencia</Text>
        </View>
        <View style={style.dotContainer}>
          <Image
            source={require('../../assets/images/dots.png')}
            style={style.dots}
          />
        </View>
        <View style={style.ButtonContainer}>
          <JobModal
            onPressOut={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            visible={this.state.modalVisible}
          />
          <Jobbtn
            btntext="Mensaje a un voluntario"
            onPress={this.handleMessageReq}
            icon="text"
          />
          <Jobbtn
            btntext="Llamar voluntario"
            onPress={() => {
              this.setModalVisible(true);
            }}
            icon="call"
          />
          <Jobbtn
            btntext="Revisión de documento"
            onPress={this.handleDocReq}
            icon="paper"
          />
        </View>
      </View>
    );
  }

  handleBackPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Language');
  };

  handleMessageReq = async () => {
    let native;
    let language;
    // get languages BASED ON LOCAL STORAGE
    try {
      native = await AsyncStorage.getItem('native');
      language = await AsyncStorage.getItem('language');
      // console.log("native:", native, "language:", language)
      // return native, language;

    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }

    const findmatch = {
      native: native,
      language: language
    }
    console.log("native:", native, "language:", language)
    // send the backend to match user with person in chat
    fetch('https://oyabackend.herokuapp.com/user/match', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(findmatch)
    }).then(res => res.json()).then( (res) => {
      console.log(res)
      let socket = res.socket

      const {
        navigation: { navigate },
      } = this.props;
      navigate('Chat');

      this.saveSocket(socket)

      this.takeVolunteer(socket)

    })
      .catch(err => console.warn(err))
  };

  saveSocket = async (socket) => {
    try {
         await AsyncStorage.setItem('Vsocket', `${socket}`);
        await AsyncStorage.setItem('user', "true");
         await AsyncStorage.setItem('volunteer', "false");
        console.log("Vsocket", socket)
      } catch (error) {
        // Error retrieving data
        console.log(error.message);
      }
  }

  // makes volunteer unavailable to get connected with someone else
  takeVolunteer = (socket) => {
    fetch(`https://oyabackend.herokuapp.com/volunteer/busy/chat`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        socket: `${socket}`
      })
    }).then(
      console.log("volunteer is now busy")
    )
      .catch(err => console.warn(err))
  }

  handleDocReq = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Upload');
  };
}

export default Job;
