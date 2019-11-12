import style from './style';
import React, { PureComponent } from 'react';
import color from '../../constants/Colors';
import imageLogo from "../../assets/images/dots.png";
import Button from "../../components/V-form/formbutton";
import Forminput from "../../components/V-form/forminput";
import PickerBox from 'react-native-picker-box';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback, Keyboard,
  View,
  Select,
  Picker
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
    const user = this.state.newUser;
    if (user.firstname && user.lastname && user.email && user.phonenumber && user.language1 && user.language2) {
      fetch('Heroku link will go here', {
        method: 'POST',
        body: user
      })
        .then(() => {
          const {
            navigation: { navigate },
          } = this.props;
          navigate('Account');
        })
        .catch(err => console.warn(err))
    } else {
      this.setState({error: true})
    }
    
  };

  showError = () => {
    if (this.state.error) {
      return <Text style={style.error}>Please make sure you fill out all inputs with an asterisk (*)</Text>
    }
  };

  // should there be an error message?
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <View style={style.container}>
          <Text style={style.title}>Volunteer Form</Text>
          <Image source={imageLogo} style={style.logo} />
          {this.showError()}
          <View style={style.form} onSubmit={this.handleSubmit}>
            <ScrollView>
              <Text style={style.formLabel}>*First Name:</Text>
              <Forminput
                name="firstname"
                value={this.state.newUser.firstname}
                onChangeText={this.handleInputChange}
                placeholder="Enter first name"
                returnKeyType="next"
              />
              <Text style={style.formLabel}>*Last Name:</Text>
              <Forminput
                name="lastname"
                value={this.state.newUser.lastname}
                onChangeText={this.handleInputChange}
                placeholder="Enter last name"
                returnKeyType="next"
              />
              <Text style={style.formLabel}>*Email:</Text>
              <Forminput
                value={this.state.newUser.email}
                onChangeText={this.handleInputChange}
                placeholder="Input email"
                name="email"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
              />
              <Text style={style.formLabel}>*Phone Number:</Text>
              <Forminput
                value={this.state.newUser.phonenumber}
                onChangeText={this.handleInputChange}
                placeholder="Phone number"
                name="phonenumber"
                autoCorrect={false}
                keyboardType="phone-pad"
                returnKeyType="next"
              />
              <Text style={style.formLabel}>*Language 1:</Text>
              <Forminput
                value={this.state.newUser.language1}
                onChangeText={this.handleInputChange}
                placeholder="Language"
                name="language1"
                autoCorrect={true}
                returnKeyType="next"
              />

              <Text style={style.formLabel}>*Proficiency:</Text>
              <Forminput
                value={this.state.newUser.proficiency1}
                onChangeText={this.handleInputChange}
                placeholder="Proficiency"
                name="proficiency1"
                autoCorrect={true}
                returnKeyType="next"
              />

              <Text style={style.formLabel}>*Language 2:</Text>
              <Forminput
                value={this.state.newUser.language2}
                onChangeText={this.handleInputChange}
                placeholder="Language"
                name="language2"
                autoCorrect={true}
                returnKeyType="next"
              />

              <Text style={style.formLabel}>*Proficiency:</Text>
              <Forminput
                value={this.state.newUser.proficiency2}
                onChangeText={this.handleInputChange}
                placeholder="Proficiency"
                name="proficiency2"
                autoCorrect={true}
                returnKeyType="next"

              />  
              
              <Text style={style.formLabel}>Language 3:</Text>
              <Forminput
                value={this.state.newUser.language3}
                onChangeText={this.handleInputChange}
                placeholder="Language"
                name="language3"
                autoCorrect={true}
                returnKeyType="next"
              />

              <Text style={style.formLabel}>Proficiency:</Text>
              <Forminput
                value={this.state.newUser.proficiency3}
                onChangeText={this.handleInputChange}
                placeholder="Proficiency"
                name="proficiency3"
                autoCorrect={true}
                returnKeyType="done"
              />

              <Button label="Submit" onPress={this.handleSubmit} />
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback >
    );
  }

}

export default VForm;