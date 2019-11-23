import React from 'react';
import {
  Switch,
  Text,
  View,
  AsyncStorage,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
  AppState
} from 'react-native';
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
    phoneNotification: false,
    documentNotification: false,

    mysqlID: '',
    firstname: '',
    lastname: '',
    language1: '',
    language2: '',
    language3: ''
  };

  componentDidMount = () => {
    AppState.addEventListener('change', this.getNotificationM);
    // AppState.addEventListener('change', this.getNotificationP);
    // AppState.addEventListener('change', this.getNotificationD);

    // GET USER INFORMATION FROM LOCAL STORAGE
    this.handleLocalStorageGet();

    // get id and udpate
    this.getID()

  }

  getID = async () => {
    try {
      let userId = await AsyncStorage.getItem('mysqlID') || 'none';
      this.setState({ mysqlID: userId })
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  handleLocalStorageGet = async () => {
    let firstname = '';
    let lastname = '';
    let language1 = '';
    let language2 = '';
    let language3 = '';
    let socket = '';

    try {
      firstname = await AsyncStorage.getItem('firstname');
      lastname = await AsyncStorage.getItem('lastname');
      language1 = await AsyncStorage.getItem('language1');
      language2 = await AsyncStorage.getItem('language2');
      language3 = await AsyncStorage.getItem('language3');
      socket = await AsyncStorage.getItem('socket');
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }

    this.setState({
      firstname: firstname,
      lastname: lastname,
      language1: language1,
      language2: language2,
      language3: language3,
      socket: socket
    });

    console.log({
      'firstname ': firstname,
      'lastname': lastname,
      'language1': language1,
      'language2': language2,
      'language3': language3,
    })

  }

  removeListener = (res) => {
    let stopListener;
    if (res === "M") {
      stopListener = this.getNotificationM;
    } else if (res === "P") {
      stopListener = this.getNotificationP;
    } else if (res === "D") {
      stopListener = this.getNotificationD;
    }
    AppState.removeEventListener('change', stopListener);
  }

  getNotificationM = () => {
    fetch(`https://oyabackend.herokuapp.com/volunteer/notification/${this.state.mysqlID}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then((response) => {
        this.setState({
          messageNotification: response.chatavail
        });
      })
      .catch(err => console.warn(err))

    if (this.state.appState.match(/inactive/)) {
      // REMOVE LISTENER
      this.removeListener("M")
    }
  }

  // getNotificationP = () => {
  //   fetch('Heroku link will go here', {
  //     method: 'GET'
  //   }).then(res => res.json()).then((response) => {
  //     this.setState({
  //       phoneNotification: response
  //     });
  //   })
  //     .catch(err => console.warn(err))

  //   if (this.state.appState.match(/inactive/)) {
  //     // REMOVE LISTENER
  //     this.removeListener("P")
  //   }
  // }


  // getNotificationD = () => {
  //   fetch('Heroku link will go here', {
  //     method: 'GET'
  //   }).then(res => res.json()).then((response) => {
  //     this.setState({
  //       documentNotification: response
  //     });
  //   })
  //     .catch(err => console.warn(err))

  //   if (this.state.appState.match(/inactive/)) {
  //     // REMOVE LISTENER
  //     this.removeListener("D")
  //   }
  // }


  toggleMessage = value => {
    this.setState({ messageValue: value });
    // put call
    fetch('https://oyabackend.herokuapp.com/volunteer/', {
      method: 'PUT',
      body: JSON.stringify({
        mysqlID: `${this.state.mysqlID}`,
        massageAvail: `${value}`,
      })
        .then(res => res.json())
        .catch(err => console.warn(err)),
    });
  };

  togglePhone = value => {
    this.setState({ phoneValue: value });
    // put call
    // fetch('Heroku link will go here', {
    //   method: 'PUT',
    //   body: { phoneAvail: value }
    // })
    //   .catch(err => console.warn(err))
  };

  toggleDocument = value => {
    this.setState({ documentValue: value });
    // put call
    // fetch('Heroku link will go here', {
    //   method: 'PUT',
    //   body: { documentAvail: value }
    // })
    //   .catch(err => console.warn(err))
  };

  static navigationOptions = {
    drawerLabel: 'Cuenta',
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
        size={30}
        color={colors.blue2}
      />
    ),
  };

  console = value => {
    console.log("=================")
    this.state.messageValue ? console.log('message is ON') : console.log('message is OFF')
    this.state.phoneValue ? console.log('phone is ON') : console.log('phone is OFF')
    this.state.documentValue ? console.log('doc is ON') : console.log('doc is OFF')

  };


  render() {
    return (
      <View style={style.container}>
        {this.console()}
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
            name={`${this.state.firstname} ${this.state.lastname} `}
            language1={this.state.language1}
            language2={this.state.language2}
            language3={this.state.language3}
          />
        </View>

        <ScrollView>
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
              color={
                this.state.messageNotification ? colors.blue4 : colors.bluegrey
              }
            />
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-alert' : 'md-alert'}
              size={22}
              style={
                this.state.messageNotification
                  ? style.Notification
                  : style.noneNotification
              }
              color="red"
            />
            <Ionicons
              name={
                Platform.OS === 'ios'
                  ? 'ios-arrow-dropright-circle'
                  : 'me-arrow-dropright-circle'
              }
              size={40}
              color={colors.white}
              onPress={this.handleMessage}
            />
          </View>

          <View style={style.availrow}>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-call' : 'me-call'}
              size={40}
              color={colors.bluegrey}
            />
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-alert' : 'md-alert'}
              size={22}
              style={
                this.state.phoneNotification
                  ? style.Notification
                  : style.noneNotification
              }
              color="red"
            />
            <Ionicons
              name={
                Platform.OS === 'ios'
                  ? 'ios-arrow-dropright-circle'
                  : 'me-arrow-dropright-circle'
              }
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
              name={Platform.OS === 'ios' ? 'ios-alert' : 'md-alert'}
              size={22}
              style={
                this.state.documentNotification
                  ? style.Notification
                  : style.noneNotification
              }
              color="red"
            />
            <Ionicons
              name={
                Platform.OS === 'ios'
                  ? 'ios-arrow-dropright-circle'
                  : 'me-arrow-dropright-circle'
              }
              size={40}
              color={colors.white}
            // onPress={this.}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  handleMenu = () => {
    this.props.navigation.openDrawer();
  };


  handleMessage = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Chat');
  };

}