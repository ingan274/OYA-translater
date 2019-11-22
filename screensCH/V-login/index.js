import style from './style';
import React, { PureComponent } from 'react';
import { Image, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import Button from "../../components/login-signup/loginbtn";
import Form from "../../components/login-signup/loginFrom";
import imageLogo from "../../assets/images/logo.png";
import strings from "../../components/login-signup/strings";
import { Ionicons } from '@expo/vector-icons';

class LoginScreen extends PureComponent {
  state = {
    user: '',
    password: '',
    error: false,
  }

  handleUserChange = (user) => {
    this.setState({ user: user });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleLoginPress = (event) => {
    let user = this.state.user;
    let pass = this.state.password;

    const login = {
      username: user,
      password: pass
    }

    fetch('https://oyabackend.herokuapp.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login)
    }).then(res => res.json())
      .then((response) => {
        if (response.mysqlID === "none") {
          this.setState({ error: true });
        } else {
          let id = response.mysqlID;
          let firstname = response.firstname;
          let lastname = response.lastname;

          this.handleLocalStorageName(firstname, lastname)

          fetch(`https://oyabackend.herokuapp.com/volunteer/${id}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }).then(res => res.json())
            .then(async (data) => {
              const response = data[0]
              // SAVE RESPONSE IN LOCAL STORAGE
              const language1 = response.language1;
              const language2 = response.language2;
              const language3 = response.language3;
              const socket = response.socket;

              this.handleLocalStorageLanguage(language1, language2, language3, socket)

              //NAVIGATE
              const {
                navigation: { navigate },
              } = this.props;
              navigate('Account');
            })
            .catch(err => console.warn(err))
        }
      })
      .catch(err => console.warn(err))
  };

  handleLocalStorageName = async (firstname, lastname) => {
    try {
      await AsyncStorage.setItem('firstname', `${firstname}`);
      console.log('firstname', firstname);
      await AsyncStorage.setItem('lastname', `${lastname}`);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  handleLocalStorageLanguage = async (language1, language2, language3, socket) => {
    try {
      await AsyncStorage.setItem('language1', `${language1}`);
      console.log('language1', language1);
      await AsyncStorage.setItem('language2', `${language2}`);
      console.log('language2', language2);
      await AsyncStorage.setItem('language3', `${language3}`);
      console.log('language3', language3);
      await AsyncStorage.setItem('socket', `${socket}`);
      console.log('socket', socket);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  showError = () => {
    if (this.state.error) {
      return <Text style={style.error}>糟糕！您的用户名或密码不匹配。请再试一次。</Text>
    }
  };


  handleSignUp = () => {

    const {
      navigation: { navigate },
    } = this.props;
    navigate('SignUp');
  };

  handleBack = () => {

    const {
      navigation: { navigate },
    } = this.props;
    navigate('Language');
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <Image source={imageLogo} style={style.logo} />
          <Text style={style.title}>{strings.CHLOGIN}</Text>
          <View style={style.form}>
            {this.showError()}
            <Form
              value={this.state.user}
              onChangeText={this.handleUserChange}
              onSubmitEditing={this.handleUserSubmitPress}
              placeholder={strings.CHUSER_PLACEHOLDER}
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
            />
            <Form
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              placeholder={strings.CHPASSWORD_PLACEHOLDER}
              secureTextEntry={true}
              returnKeyType="done"
            />
            <Button label={strings.CHLOGIN} onPress={this.handleLoginPress} />
            <TouchableOpacity
              onPress={this.handleSignUp} // navigation
              style={style.SU}
            >
              <Text>注册</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handleBack} // navigation
              style={style.SU}
            >
              <Text>返回语言选择</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
};

export default LoginScreen;