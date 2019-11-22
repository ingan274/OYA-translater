import style from './style';
import React, { PureComponent } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, AsyncStorage } from "react-native";
import Button from "../../components/login-signup/loginbtn";
import Form from "../../components/login-signup/loginFrom";
import imageLogo from "../../assets/images/logo.png";
import strings from "../../components/login-signup/strings";



class SignUp extends PureComponent {

  state = {
    username: "",
    password: "",
    passwordC: "",
    passerror: false,
    usererror: false,
  };


  handleUserChange = (user) => {
    this.setState({ user: user });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handlePasswordConfirmChange = (password) => {
    this.setState({ passwordC: password });
  };

  handleSignUpPress = async () => {
    let username = this.state.user;
    let pass = this.state.password;
    let passC = this.state.passwordC;

    const newUser = {
      username: username,
      password: pass
    }

    // passwords don't match
    if (pass !== passC) {
      this.setState({ passerror: true });
    } else {
      //post call 
      fetch('https://oyabackend.herokuapp.com/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser)
      }).then(res => res.json())
        .then(async (response) => {
          console.log(response)
          if (response.mysqlID === "none") {
            this.setState({ emailerror: true });
          } else {

            let mysqlID = response.mysqlID
            // console.log(mysqlID)
            this.saveID(mysqlID)

            // NAVIGATE
            const {
              navigation: { navigate },
            } = this.props;
            navigate('Form');
          }

        })
        .catch(err => console.warn(err))

    }
  };

  saveID = async (id) => {
    try {
      await AsyncStorage.setItem('mysqlID', `${id}`);
    } catch (error) {
      console.log(error.message);
    }
  }


  handleLogIn = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('LogIn');
  };

  showError = () => {
    if (this.state.passerror) {
      return <Text style={style.error}>Please make sure your passwords match. Please try again.</Text>
    } else if (this.state.emailerror) {
      return <Text style={style.error}>Oops. Looks like that username has already been used. Please choose another username.</Text>
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
              value={this.state.user}
              onChangeText={this.handleUserChange}
              onSubmitEditing={this.handleUserSubmitPress}
              placeholder={strings.USER_PLACEHOLDER}
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
              <Text>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

export default SignUp;