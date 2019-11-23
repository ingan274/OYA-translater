import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings(['Require cycle:']);
import Lang1 from '../../screens/lang1';
import Chinese from '../chinese/2lang2-job_Vlogin';
import Spanish from './2lang2-job_Vlogin';
import English from '../eng/2lang2-job_Vlogin';
import About from '../../screens/about'; 

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: { screen: Lang1 },
      Chinese: { screen: Chinese },
      Spanish: { screen: Spanish },
      English: { screen: English },
      About: { screen: About }
    },
    {
      initialRouteName: 'Home',
    },
  )
)