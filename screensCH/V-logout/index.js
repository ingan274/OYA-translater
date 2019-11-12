import style from './style';
import React, { PureComponent } from 'react';
import Btn from '../../components/button';
import JobModal from '../../components/JobModal';
import { Ionicons } from '@expo/vector-icons';
import color from '../../constants/Colors';
import {
  Image,
  Platform,
  Text,
  View
} from 'react-native';

class Job extends PureComponent {
  state = {
    modalVisible: false,
  };

  static navigationOptions = {
    drawerLabel: 'Logout',
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name={Platform.OS === 'ios' ? 'ios-log-out' : 'md-log-out'}
        size={30}
        color={color.blue2}
      />
    ),
  };

  componentDidMount = () => {
    // GETTING RID OF TOKEN to log them out
    fetch('Heroku link will go here', {
      method: 'POST'
    })
      .catch(err => console.warn(err))
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {

    return (
       <View style={style.container}>
        <Image style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} source={require('../../assets/images/logoutback.jpeg')}/>
            <View style={style.textContainer}>
            <Text style={style.headerTitle}>您已成功注销</Text>
            </View>
          <View style={style.ButtonContainer}>
            <Btn
              btntext="回到首页"
              onPress={this.handleHome}
              icon="home"
            />
            <Btn
              btntext="登入"
              onPress={this.handleLogin}
              icon="log-in"
            />
          </View>
        </View>
    );
  }

  handleHome = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Home');
  };

  handleLogin = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Login');
  };

}

export default Job;