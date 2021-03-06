import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Lang1 from '../../screens/lang1';
import Chinese from '../chinese/2lang2-job_Vlogin';
import Spanish from '../spanish/2lang2-job_Vlogin';
import English from './2lang2-job_Vlogin';
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