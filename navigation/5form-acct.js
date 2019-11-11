import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Form from '../screens/V-form';
import Account from './5acct-settings';

export default createAppContainer(
  createSwitchNavigator(
    {
      Form: { screen: Form },
      Account: { screen: Account }
    },
    {
      initialRouteName: 'Form',
    },
  )
)
