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


  handleUserChange = (user) => {
    this.setState({ user: user });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handlePasswordConfirmChange = (password) => {
    this.setState({ passwordC: password });
  };

  handleSignUpPress = () => {
    let username = this.state.user;
    let pass = this.state.password;
    let passC = this.state.passwordC;

    const newUser = {
      username: username,
      password: pass
    }

    // passwords don't match
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
        body: JSON.stringify({ newUser })
      })
        .then((response) => {
          if (response.mysqlID === "none") {
            this.setState({ emailerror: true });
          } else {
            let mysqlID = response.mysqlID
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
      await AsyncStorage.setItem('mysqlID', id);
    } catch (error) {
      // Error retrieving data
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
      return <Text style={style.error}>请确保您的密码匹配。请再试一次。</Text>
    } else if (this.state.emailerror) {
      return <Text style={style.error}>哎呀。看起来该用户名已被使用。请选择另一个用户名</Text>
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <Image source={imageLogo} style={style.logo} />
          <Text style={style.title}>{strings.CHSIGNUP}</Text>
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
              returnKeyType="next"
            />
            <Form
              value={this.state.password}
              onChangeText={this.handlePasswordConfirmChange}
              placeholder={strings.CHPASSWORD_CONFIRM_PLACEHOLDER}
              secureTextEntry={true}
              returnKeyType="done"
            />
            <Button label={strings.CHSIGNUP} onPress={this.handleSignUpPress} />
            <TouchableOpacity
              onPress={this.handleLogIn} // navigation
              style={style.SU}
            >
              <Text>登录</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

export default SignUp;