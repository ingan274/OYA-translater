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
    let user = this.state.email;
    let pass = this.state.password;
    let passC = this.state.passwordC;

    const newUser = {
      username: user,
      password: pass
    }

    // passwords don't match
    if (pass !== passC) {
      this.setState({ passerror: true });
    } else {
      fetch('Heroku link will go here', {
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
      return <Text style={style.error}>请确保您的密码匹配。请再试一次。</Text>
    } else if (this.state.emailerror) {
      return <Text style={style.error}>哎呀。看起来该电子邮件已被使用。请选择另一封电子邮件。</Text>
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
              value={this.state.email}
              onChangeText={this.handleEmailChange}
              onSubmitEditing={this.handleEmailSubmitPress}
              placeholder={strings.CHEMAIL_PLACEHOLDER}
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