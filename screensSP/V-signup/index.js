import style from './style';
import React, { PureComponent } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import Button from "../../components/login-signup/loginbtn";
import Form from "../../components/login-signup/loginFrom";
import imageLogo from "../../assets/images/logo.png";
import strings from "../../components/login-signup/strings";



class SignUp extends PureComponent {

  state = {
    email: "",
    password: "",
    passwordC: "",
    passerror: false,
    emailerror: false,
  };


  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handlePasswordConfirmChange = (password) => {
    this.setState({ password: password });
  };

  handleSignUpPress = () => {
    let email = this.state.email;
    let pass = this.state.password;
    let passC = this.state.passwordC;

    const newUser = {
      email: email,
      password: pass
    }

    // passwords don't match
    if (pass !== passC) {
      this.setState({ passerror: true });
    } else {
      fetch('https://oyabackend.herokuapp.com/register', {
        method: 'POST',
        body: newUser
      })
        .then((response) => {
          if (response) {
            const {
              navigation: { navigate },
            } = this.props;
            navigate('Form');
          } else {
            this.setState({ emailerror: true });
          }
          
        })
        .catch(err => console.warn(err))
    }
  };


  handleLogIn = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('LogIn');
  };

  showError = () => {
    if (this.state.passerror) {
      return <Text style={style.error}>Por favor, asegúrese de que sus contraseñas coinciden. Inténtalo de nuevo.</Text>
    } else if (this.state.emailerror) {
      return <Text style={style.error}>Ups. Parece que ese correo electrónico ya se ha utilizado. Por favor, elija otro correo electrónico.</Text>
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <Image source={imageLogo} style={style.logo} />
          <Text style={style.title}>{strings.SPSIGNUP}</Text>
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
              returnKeyType="next"
            />
            <Form
              value={this.state.password}
              onChangeText={this.handlePasswordConfirmChange}
              placeholder={strings.SPPASSWORD_CONFIRM_PLACEHOLDER}
              secureTextEntry={true}
              returnKeyType="done"
            />
            <Button label={strings.SPSIGNUP} onPress={this.handleSignUpPress} />
            <TouchableOpacity
              onPress={this.handleLogIn} // navigation
              style={style.SU}
            >
              <Text>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

export default SignUp;