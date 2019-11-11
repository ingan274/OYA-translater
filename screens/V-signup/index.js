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
    usererror: false,
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
    let user = this.state.email;
    let pass = this.state.password;
    let passC = this.state.passwordC;

    // ajax call to GET all usernames and compare to username implemented

    // ajax call to PUT new user un

    if (passC === pass) {
      const newUser = {
        username: user,
        password: pass
      }
      // post call .then
      const {
        navigation: { navigate },
      } = this.props;
      navigate('Form');
    }
    // passwords don't match
    else if (pass !== passC) {
      this.setState({ passerror: true });
    }
    // checking if username is unique
    // else if () {

    // }
  };


  handleLogIn = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('LogIn');
  };

  showError = () => {
    if (this.state.passerror) {
      return <Text style={style.error}>Please make sure your passwords match. Please try again.</Text>
    } else if (this.state.usererror) {
      return <Text style={style.error}>Please choose another username. Looks like that one has been taken</Text>
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <Image source={imageLogo} style={style.logo} />
          <Text style={style.title}>{strings.SIGNUP}</Text>
          <View style={style.form}>
            {this.showError()}
            <Form
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              onSubmitEditing={this.handleEmailSubmitPress}
              placeholder={strings.EMAIL_PLACEHOLDER}
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
            />
            <Form
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              placeholder={strings.PASSWORD_PLACEHOLDER}
              secureTextEntry={true}
              returnKeyType="next"
            />
            <Form
              value={this.state.password}
              onChangeText={this.handlePasswordConfirmChange}
              placeholder={strings.PASSWORD_CONFIRM_PLACEHOLDER}
              secureTextEntry={true}
              returnKeyType="done"
            />
            <Button label={strings.SIGNUP} onPress={this.handleSignUpPress} />
            <TouchableOpacity
              onPress={this.handleLogIn} // navigation
              style={style.SU}
            >
              <Text>Switch to LogIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

export default SignUp;