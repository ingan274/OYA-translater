import style from "./style";
import React, { Component } from 'react';
import Langbtn from "../../components/langbtn"
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class Lang2 extends Component {
    render() {
      return (
        <View style={style.container}>
          <Image
          source={require('../assets/images/dots.png')}
          style={style.logo} ></Image>
          <Langbtn btntext="English"/>
        </View>
      );
    }
  }
  
  export default Lang2;