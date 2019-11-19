import style from './style';
import React, { PureComponent } from 'react';
import Jobbtn from '../../components/Jobbtn';
import JobModal from '../../components/JobModalCH';
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
    title: '协助',
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
          <Text style={style.headerTitle}>协助</Text>
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
            btntext="留言义工"
            onPress={this.handleMessageReq}
            icon="text"
          />
          <Jobbtn
            btntext="致电义工"
            onPress={() => {
              this.setModalVisible(true);
            }}
            icon="call"
          />
          <Jobbtn
            btntext="文件审查"
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
      native = await AsyncStorage.getItem('native') || 'none';
      language = await AsyncStorage.getItem('language') || 'none';
      // console.log("native:", native, "language:",language)
      return native, language;
     
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }

     // [NEED CODE HERE] ADD LOGIC FOR SOCKET!!!!!
     if (native === "English" && language === "Chinese") {

    } else if (native === "Chinese" && language === "English") {

    } else if (native === "English" && language === "Spanish") {

    } else if (native === "Spanish" && language === "English") {

    } else if (native === "Chinese" && language === "Spanish") {

    } else if (native === "Spanish" && language === "Chinese") {

    } 


    // // send the backend to match user with person in chat
    // fetch('https://oyabackend.herokuapp.com/match', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     native: native,
    //     language: language,
    //     job: "message"
    //   })
    // }).then((res) => res.json()) .then(async (res) => {
    //   // store socket info in local
    //   let socket = res.socket
      
    //   try {
    //     await AsyncStorage.setItem('socket', socket);
    //     console.log("socket", socket)
    //   } catch (error) {
    //     // Error retrieving data
    //     console.log(error.message);
    //   }

    //   const {
    //     navigation: { navigate },
    //   } = this.props;
    //   navigate('Chat');
    // })
    //   .catch(err => console.warn(err))

  };

  handleDocReq = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Upload');
  };
}

export default Job;
