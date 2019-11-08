import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Language from '../screens/lang2';
import Jobs from '../screens/U-jobs';
import VolunteerLogIn from './3-4login-signup';

export default createAppContainer(
  createSwitchNavigator(
    {
      Jobs: { screen: Jobs },
      Language: { screen: Language },
      VolunteerLogIn: { screen: VolunteerLogIn }
    },
    {
      initialRouteName: 'Language',
    },
  )
)
