import style from './style';
import React, { PureComponent } from 'react';
import { Ionicons } from '@expo/vector-icons';
import color from '../../constants/Colors';
import imageLogo from "../../assets/images/dots.png";
import Button from "../../components/V-form/formbutton";
import Forminput from "../../components/V-form/forminput";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback, Keyboard,
  View,
  Select
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
    LanguageOptions: ["English", "Chinese", "Farsi", "French", "Spanish"],
    LanguageProf: ["Basic Knowledge", "Conversant", "Proficient", "Fluent", "Native Language / Native Speaker"],
  }

  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
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

        <View style={style.container}>
          <Text style={style.title}>Volunteer Form</Text>
          <Image source={imageLogo} style={style.logo} />
          <View style={style.form} onSubmit={this.handleSubmit}>
            <ScrollView>
              <Text style={style.formLabel}>First Name:</Text>
              <Forminput
                name="firstname"
                value={this.state.newUser.firstname}
                onChangeText={this.handleInputChange}
                placeholder="Enter first name"
                returnKeyType="next"
              />
              <Text style={style.formLabel}>Last Name:</Text>
              <Forminput
                name="lastname"
                value={this.state.newUser.lastname}
                onChangeText={this.handleInputChange}
                placeholder="Enter last name"
                returnKeyType="next"
              />
              <Text style={style.formLabel}>Email:</Text>
              <Forminput
                value={this.state.newUser.email}
                onChangeText={this.handleInputChange}
                placeholder="Input email"
                name="email"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
              />
              <Text style={style.formLabel}>Phone Number:</Text>
              <Forminput
                value={this.state.newUser.phonenumber}
                onChangeText={this.handleInputChange}
                placeholder="Phone number"
                name="phonenumber"
                autoCorrect={false}
                keyboardType="phone-pad"
                returnKeyType="next"
              />
              {/* <Picker
                selectedValue={this.state.language}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language: itemValue })
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker> */}
              <Button label="Submit" onPress={this.handleSubmit} />
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }


}

export default VForm;