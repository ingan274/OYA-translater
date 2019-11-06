import style from './style';
import React, { Component } from 'react';
import Langbtn from '../../components/Langbtn.js';
import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Lang1() {
  return (
    <View style={style.container}>
      <View style={style.infoContainer}>
        <Ionicons
          name="md-info"
          type="Feather"
          size={26}
          style={style.info}
          // onPress={}
        />
      </View>
      <View style={style.logoContainer}>
        <Image
          source={
            __DEV__
              ? require('../../assets/images/logo.png')
              : require('../../assets/images/logo.png')
          }
          style={style.logo}
        />
      </View>
      <Text style={style.subhead}>
        A peer to peer translation service that connects you with bilingual
        speakers
      </Text>

      <Langbtn btntext="English" />
      <Langbtn btntext="Español" />
      <Langbtn btntext="中文" />
    </View>
  );
}

export default Lang1;
