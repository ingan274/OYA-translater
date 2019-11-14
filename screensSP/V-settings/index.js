import React from 'react';
import {
  Switch,
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from 'react-native';
import colors from '../../constants/Colors';
import NameLang from '../../components/accntLangSet';
import style from './style';
import { Ionicons } from '@expo/vector-icons';

export default class Account extends React.Component {
  state = {
    notification: true,

    firstname: '',
    lastname: '',
    language1: '',
    language2: '',
    language3: ''
  };

  componentDidMount = () => {

    // GET USER INFORMATION FROM LOCAL STORAGE
    this.handleLocalStorageGet()
  }

  handleLocalStorageGet = async () => {
    let firstname = '';
    let lastname = '';
    let language1 = '';
    let language2 = '';
    let language3 = '';
    
    try {
      firstname = await AsyncStorage.getItem('firstname') || '';
      lastname = await AsyncStorage.getItem('lastname') || '';
      language1 = await AsyncStorage.getItem('language1') || '';
      language2 = await AsyncStorage.getItem('language2') || '';
      language3 = await AsyncStorage.getItem('language3') || '';
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
    });

    console.log({
      'firstname': firstname,
      'lastname': lastname,
      'language1': language1,
      'language2': language2,
      'language3': language3,
    })
  }

  toggleNotification = value => {
    this.setState({ notification: value });
  };


  static navigationOptions = {
    drawerLabel: 'Configuraciones',
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
        size={30}
        color={colors.blue2}
      />
    ),
  };


  render() {
    return (
      <View style={style.container}>
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
            <View style={style.itemCont}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'}
                size={40}
                style={style.item}
              />
              <Text style={style.item}>Notificaciones de aplicación</Text>
            </View>
            <Switch
              onValueChange={this.toggleNotification}
              value={this.state.notification}
            />
          </View>
          <View style={style.availrow}>
            <View style={style.itemCont}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-images' : 'md-images'}
                size={40}
                style={style.item}
              />
              <Text style={style.item}>Cambiar foto de perfil</Text>
            </View>

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
          <View style={style.itemCont}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
                size={40}
                style={style.item}
              />
              <Text style={style.item}>Actualización del perfil</Text>
            </View>

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
          <View style={style.itemCont}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-help-circle' : 'md-help-circle'}
                size={40}
                style={style.item}
              />
              <Text style={style.item}>Póngase en contacto con el equipo de OYA</Text>
            </View>

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
  };

  handleMenu = () => {
    this.props.navigation.openDrawer();
  };

}