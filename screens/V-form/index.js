import style from './style';
import React, { PureComponent } from 'react';
import { Ionicons } from '@expo/vector-icons';
import color from '../../constants/Colors';
import imageLogo from "../../assets/images/dots.png";
import Button from "../../components/V-form/formbutton";
import Form from "../../components/V-form/forminput";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback, Keyboard,
  View,
  ScrollView
} from 'react-native';

class VForm extends PureComponent {

  static navigationOptions = {
    title: 'Volunteer Form',
    headerStyle: {
      backgroundColor: color.blue4,
    },
    headerTintColor: color.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentDidMount() {
    console.log('Form did mount');
  }

  componentWillUnmount() {
    console.log('Form Unmounted');
  }

  state = {
    newUser: {
      firstname: '',
      lastname: '',
      email: '',
      phonenumber: '',
      language1: '',
      language2: '',
      language3: '',
      proficiency1: '',
      proficiency2: '',
      proficiency3: '',
    },

    error: false,
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Account');
  };

  // should there be an error message?
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView style={style.container}>
          <Text style={style.title}>Volunteer Form</Text>
          <Image source={imageLogo} style={style.logo} />
          <Text style={style.title}>{strings.LOGIN}</Text>
          <View style={style.form}>
            <Text style={style.formlabel}>First Name:</Text>
            <Form
              name="firstname"
              value={this.state.newUser.firstname}
              onChangeText={this.handleInputChange}
              placeholder="First Name"
              returnKeyType="next"
            />
            <Text style={style.formlabel}>Last Name:</Text>
            <Form
              name="lastname"
              value={this.state.newUser.lastname}
              onChangeText={this.handleInputChange}
              placeholder="First Name"
              returnKeyType="next"
            />
            <Text style={style.formlabel}>Email:</Text>
            <Form
              value={this.state.newUser.email}
              onChangeText={this.handleInputChange}
              placeholder="Email"
              name="Email"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
            />
            <Text style={style.formlabel}>Phone Number:</Text>
            <Form
              value={this.state.newUser.phonenumber}
              onChangeText={this.handleInputChange}
              placeholder="Phone Number"
              name="Phone Number"
              autoCorrect={false}
              keyboardType="phone-pad"
              returnKeyType="next"
            />
            <Form
              name="firstname"
              value={this.state.password}
              onChangeText={this.handleInputChange}
              placeholder={strings.PASSWORD_PLACEHOLDER}
              returnKeyType="next"
            />
            <Button label={strings.LOGIN} onPress={this.handleSubmit} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }


}

export default VForm;