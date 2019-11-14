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

    error: false,
  }

  handleSubmit = () => {
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const email = this.state.email;
    const phonenumber = this.state.phonenumber;
    const language1 = this.state.language1;
    const language2 = this.state.language2;
    const language3 = this.state.language3;
    const proficiency1 = this.state.proficiency1;
    const proficiency2 = this.state.proficiency2;
    const proficiency3 = this.state.proficiency3;

    const user = {
      firstname:firstname,
      lastname: lastname,
      email: email,
      phonenumber: phonenumber,
      language1: language1,
      language2: language2,
      language3: language3,
      proficiency1: proficiency1,
      proficiency2: proficiency2,
      proficiency3: proficiency3,
    }
    
    if (firstname && lastname && email && phonenumber && language1 && language2) {
      // console.log(user)
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
      return <Text style={style.error}>Asegúrese de completar todas las entradas con un asterisco(*)</Text>
    }
  };

  // should there be an error message?
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <View style={style.container}>
          <Text style={style.title}>Formulario de voluntariado</Text>
          <Image source={imageLogo} style={style.logo} />
          {this.showError()}
          <View style={style.form} onSubmit={this.handleSubmit}>
            <ScrollView>
              <Text style={style.formLabel}>*Primer nombre:</Text>
              <Forminput
                name="firstname"
                value={this.state.firstname}
                onChangeText={(event) => this.setState({firstname: event})}
                placeholder="Enter first name"
                returnKeyType="next"
              />
              <Text style={style.formLabel}>*Apellido:</Text>
              <Forminput
                name="lastname"
                value={this.state.lastname}
                onChangeText={(event) => this.setState({lastname: event})}
                placeholder="Enter last name"
                returnKeyType="next"
              />
              <Text style={style.formLabel}>*Email:</Text>
              <Forminput
                value={this.state.email}
                onChangeText={(event) => this.setState({email: event})}
                placeholder="Input email"
                name="email"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
              />
              <Text style={style.formLabel}>*Número de teléfono:</Text>
              <Forminput
                value={this.state.phonenumber}
                onChangeText={(event) => this.setState({phonenumber: event})}
                placeholder="Phone number"
                name="phonenumber"
                autoCorrect={false}
                keyboardType="phone-pad"
                returnKeyType="next"
              />
              <Text style={style.formLabel}>*Idioma 1:</Text>
              <Forminput
                value={this.state.language1}
                onChangeText={(event) => this.setState({language1: event})}
                placeholder="Language"
                name="language1"
                autoCorrect={true}
                returnKeyType="next"
              />

              <Text style={style.formLabel}>*Dominio del idioma:</Text>
              <Forminput
                value={this.state.proficiency1}
                onChangeText={(event) => this.setState({proficiency1: event})}
                placeholder="Proficiency"
                name="proficiency1"
                autoCorrect={true}
                returnKeyType="next"
              />

              <Text style={style.formLabel}>*Idioma 2:</Text>
              <Forminput
                value={this.state.language2}
                onChangeText={(event) => this.setState({language2: event})}
                placeholder="Language"
                name="language2"
                autoCorrect={true}
                returnKeyType="next"
              />

              <Text style={style.formLabel}>*Dominio del idioma:</Text>
              <Forminput
                value={this.state.proficiency2}
                onChangeText={(event) => this.setState({proficiency2: event})}
                placeholder="Proficiency"
                name="proficiency2"
                autoCorrect={true}
                returnKeyType="next"

              />  
              
              <Text style={style.formLabel}>Idioma 3:</Text>
              <Forminput
                value={this.state.language3}
                onChangeText={(event) => this.setState({language3: event})}
                placeholder="Language"
                name="language3"
                autoCorrect={true}
                returnKeyType="next"
              />

              <Text style={style.formLabel}>Dominio del idioma:</Text>
              <Forminput
                value={this.state.proficiency3}
                onChangeText={(event) => this.setState({proficiency3: event})}
                placeholder="Proficiency"
                name="proficiency3"
                autoCorrect={true}
                returnKeyType="done"
              />

              <Button label="Enviar" onPress={this.handleSubmit} />
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback >
    );
  }

}

export default VForm;