import style from './style';
import React, { PureComponent } from 'react';
import { Image, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, AsyncStorage } from "react-native";
import Button from "../../components/login-signup/loginbtn";
import Form from "../../components/login-signup/loginFrom";
import imageLogo from "../../assets/images/logo.png";
import strings from "../../components/login-signup/strings";

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
      body: JSON.stringify({ login })
    })
      .then((response) => {
        if (response.mysqlID === "none") {
          this.setState({ error: true });
        } else {
          let id = response.mysqlID;

          fetch(`https://oyabackend.herokuapp.com/volunteer/${id}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then(async (res) => {
              // SAVE RESPONSE IN LOCAL STORAGE
              const firstname = res.firstname;
              const lastname = res.lastname;
              const language1 = res.language1;
              const language2 = res.language2;
              const language3 = res.language3;
              const socket = res.socket;

              this.handleLocalStorage(firstname, lastname, language1, language2, language3, socket)

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

  handleLocalStorage = async (firstname, lastname, language1, language2, language3, socket) => {
    try {
      await AsyncStorage.setItem('firstname', firstname);
      console.log('firstname', firstname);
      await AsyncStorage.setItem('lastname', lastname);
      console.log('lastname', lastname);
      await AsyncStorage.setItem('language1', language1);
      console.log('language1', language1);
      await AsyncStorage.setItem('language2', language2);
      console.log('language2', language2);
      await AsyncStorage.setItem('language3', language3);
      console.log('language3', language3);
      await AsyncStorage.setItem('socket', socket);
      console.log('match', match);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }

  showError = () => {
    if (this.state.error) {
      return <Text style={style.error}>¡Uy! Parece que su nombre de usuario o contraseña no coinciden. Inténtalo de nuevo.</Text>
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
          <Text style={style.title}>{strings.SPLOGIN}</Text>
          <View style={style.form}>
            {this.showError()}
            <Form
              value={this.state.user}
              onChangeText={this.handleUserChange}
              placeholder={strings.SPUSER_PLACEHOLDER}
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
            />
            <Form
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              placeholder={strings.SPPASSWORD_PLACEHOLDER}
              secureTextEntry={true}
              returnKeyType="done"
            />
            <Button label={strings.SPLOGIN} onPress={this.handleLoginPress} />
            <TouchableOpacity
              onPress={this.handleSignUp} // navigation
              style={style.SU}
            >
              <Text>Regístrate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handleBack} // navigation
              style={style.SU}
            >
              <Text>Volver a la selección de idioma</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
};

export default LoginScreen;