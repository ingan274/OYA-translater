import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignUp from '../screens/V-signup';
import Form from './5form-acct';

export default createAppContainer(
  createSwitchNavigator(
    {
      Form: { screen: Form },
      SignUp: { screen: SignUp }
    },
    {
      initialRouteName: 'SignUp',
    }
  )
)