import style from './style';
import React, { PureComponent } from 'react';
import Langbtn from '../../components/Langbtn.js';
import { Ionicons } from '@expo/vector-icons';
import color from '../../constants/Colors';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class VForm extends PureComponent {
  componentDidMount() {
    console.log('Form did mount');
  }

  componentWillUnmount() {
    console.log('Form Unmounted');
  }

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

  render() {
    return (
      <View style={style.container}>
        <Text>THIS IS WHERE THE FORM WILL GO</Text>
        <TouchableOpacity
          onPress={this.handleSubmit} // navigation
        >
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-arrow-dropright-circle' : 'md-arrow-dropright-circle'}
            size={40}
            style={style.back}
            onPress={this.handleBackPress}
          />
        </TouchableOpacity>
      </View>
    );
  }

  handleSubmit = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Account');
  };
}

export default VForm;

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Alert,
//   Keyboard
// } from 'react-native';
// import t from 'tcomb-form-native';

// import styles from './styles';

// import FormContainer from '../../components/FormContainer';

// import * as utils from '../utils';
// import stylesheet from '../customTcomb/styles';

// //Constants
// import { GENDER_OPTIONS, POSITION_OPTIONS } from './data';
// const ERROR_MESSAGE = '*Required field';
// const Form = t.form.Form;

// export default class VolunteerFrom extends Component {

//         this.state = {
//   volunteer: {
//     firstname: '',
//     lastname: '',
//     phonenumber: '',
//     email: '',
//     language1: '',
//     proficiency1: '',
//     language2: '',
//     proficiency2: '',
//     language3: '',
//     proficiency4: '',
//   }

//     handleonChange = (value) => {
//     let volunteer = { ...this.state.volunteer};
//     volunteer.firstname = value.firstname || '';
//     volunteer.lastname = value.lastname || '';
//     volunteer.phonenumber = value.phonenumber || null;
//     volunteer.email = value.email || '';
//     volunteer.language1 = value.language1 || '';
//     volunteer.proficiency1 = value.proficiency1 || '';
//     volunteer.language2 = value.language2 || '';
//     volunteer.proficiency2 = value.proficiency2 || '';
//     volunteer.language3 = value.language3 || '';
//     volunteer.proficiency3 = value.proficiency3 || '';
//     this.setState({ volunteer: volunteer })
//   }

//     handleonSubmit = () => {
//     Keyboard.dismiss();
//     let volunteer = this.refs.form_employee.getValue();

//     if (volunteer) {
//       this.props.onSave(volunteer);
//     }
//   }

//     handleonCancel = () => {
//     Keyboard.dismiss();
//     if (JSON.stringify(this.state._oEmployee) === JSON.stringify(this.state._oOriginalData)) {
//       this.props.onCancel()
//     }
//     else {
//       Alert.alert(
//         'Warning',
//         'Unsaved data will be lost. Are you sure you want to exit ?',
//         [
//           { text: 'NO', onPress: () => { } },
//           { text: 'YES', onPress: () => this.props.onCancel() },
//         ],
//         { cancelable: false }
//       )
//     }
//   }

//     render() {
//     console.log('GENDER_OPTIONS: ' + JSON.stringify(GENDER_OPTIONS));
//     console.log('POSITION_OPTIONS: ' + JSON.stringify(POSITION_OPTIONS));
//     const GENDER = t.enums(GENDER_OPTIONS)
//     const POSITION = t.enums(POSITION_OPTIONS)
//     const OPTIONS = {
//       fields: {
//         firstname: {
//           label: 'FIRST NAME',
//           returnKeyType: 'next',
//           autoCorrect: false,
//           onSubmitEditing: (event) => { this.refs.form_employee.getComponent('lastname').refs.input.focus() },
//           error: ERROR_MESSAGE
//         },
//         lastname: {
//           label: 'LAST NAME',
//           returnKeyType: 'next',
//           onSubmitEditing: (event) => { this.refs.form_employee.getComponent('phonenumber').refs.input.focus() },
//           error: ERROR_MESSAGE
//         },
//         phonenumber: {
//           label: 'PHONE NUMBER',
//           returnKeyType: 'next',
//           onSubmitEditing: (event) => { this.refs.form_employee.getComponent('email').refs.input.focus() },
//           error: ERROR_MESSAGE
//         },
//         email: {
//           label: 'PHONE NUMBER',
//           returnKeyType: 'next',
//           onSubmitEditing: (event) => { this.refs.form_employee.getComponent('nickname').refs.input.focus() },
//           error: ERROR_MESSAGE
//         },

//         gender: {
//           template: CustomSelectPickerTemplate,
//           label: 'GENDER',
//           error: ERROR_MESSAGE
//         },
//       stylesheet: stylesheet
//     }
//     const EMPLOYEE = t.struct({
//       firstname: t.String,
//       middlename: t.String,
//       lastname: t.String,
//       nickname: t.maybe(t.String),
//       birthday: t.Date,
//       gender: GENDER,
//       address: t.String,
//       position: POSITION,
//       salary: t.Number
//     })

//     console.log('rendering form')
//     return (
//       <FormContainer
//         onSubmit={this._onSubmit}
//         onCancel={this._onCancel}
//         padding={35}
//         title={this.props.title}>

//         <Form
//           ref='form_employee'
//           type={EMPLOYEE}
//           onChange={this._onChange}
//           value={this.state._oEmployee}
//           options={OPTIONS} />

//       </FormContainer>
//     )
//   }
// }
