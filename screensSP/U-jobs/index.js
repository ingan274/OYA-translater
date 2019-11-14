import style from './style';
import React, { PureComponent } from 'react';
import Jobbtn from '../../components/Jobbtn';
import JobModal from '../../components/JobModal';
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
            btntext="Mensaje voluntario"
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

  handleMessageReq = () => {
    let language;
    // get language based on token/userid
    fetch('Heroku link will go here', {
      method: 'GET'
    }).then((languageRES) => {
      language = languageRES
    })
      .catch(err => console.warn(err))

      // send the backend to match user with person in chat
    fetch('Heroku link will go here', {
      method: 'PUT',
      body: { 
        language: language,
        job: "message"
         }
    }).then(() => {
      const {
        navigation: { navigate },
      } = this.props;
      navigate('Chat');
    })
      .catch(err => console.warn(err))

  };

  handleDocReq = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Upload');
  };
}

export default Job;