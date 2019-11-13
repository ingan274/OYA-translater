import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LogIn from '../../screens/V-login';
import Account from './5acct-settings';

export default createAppContainer(
  createSwitchNavigator(
    {
      LogIn: { screen: LogIn },
      Account: { screen: Account }
    },
    {
      initialRouteName: 'LogIn',
    },
  )
)