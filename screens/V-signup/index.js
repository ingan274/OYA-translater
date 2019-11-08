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

class SignUp extends PureComponent {
  componentDidMount() {
    console.log('Chatroom did mount');
  }

  componentWillUnmount() {
    console.log('Chatroom Unmounted');
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
        <Text>THIS IS WHERE THE SIGN UP FORM WILL GO</Text>
      </View>
    );
  }

}

export default SignUp;



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
// const ERROR_MESSAGE = '*Required field';
// const Form = t.form.Form;

// export default class VolunteerFrom extends Component {
 
//         this.state = {
//   volunteer: {
//     username: '',
//     password: '',
//     password2: '',
//
//   }
   

//     handleonChange = (value) => {
//     let volunteer = { ...this.state.volunteer};
//     volunteer.username = value.username || '';
//     volunteer.password = value.password || '';
//     volunteer.phonenumber = value.password2 || null;
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
//     const OPTIONS = {
//       fields: {
//         username: {
//           label: 'USERNAME',
//           returnKeyType: 'next',
//           autoCorrect: false,
//           onSubmitEditing: (event) => { this.refs.form_employee.getComponent('password').refs.input.focus() },
//           error: ERROR_MESSAGE
//         },
//         password: {
//           label: 'LAST NAME',
//           returnKeyType: 'next',
//           onSubmitEditing: (event) => { this.refs.form_employee.getComponent('password1').refs.input.focus() },
//           error: ERROR_MESSAGE
//         },
//         password1: {
//           label: 'PHONE NUMBER',
//           returnKeyType: 'next',
//           onSubmitEditing: (event) => { this.refs.form_employee.getComponent('email').refs.input.focus() },
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