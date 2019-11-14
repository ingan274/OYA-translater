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
    email: '',
    password: '',
    error: false,
  }

  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleLoginPress = (event) => {
    let user = this.state.email;
    let pass = this.state.password;

    const login = {
      email: user,
      password: pass
    }

    fetch('https://oyabackend.herokuapp.com/login', {
      method: 'POST',
      body: login
    })
      .then((response) => {
        if (response) {
          const {
            navigation: { navigate },
          } = this.props;
          navigate('Account');
        } else {
          this.setState({ error: true });
        }

      })
      .catch(err => console.warn(err))
  };

  showError = () => {
    if (this.state.error) {
      return <Text style={style.error}>¡Uy! Parece que su correo electrónico o contraseña no coinciden. Inténtalo de nuevo.</Text>
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
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              onSubmitEditing={this.handleEmailSubmitPress}
              placeholder={strings.SPEMAIL_PLACEHOLDER}
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