import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LogIn from './4long-autho';
import SignUp from './4signup-Form';

export default createAppContainer(
  createSwitchNavigator(
    {
      LogIn: { screen: LogIn },
      SignUp: { screen: SignUp },
    },
    {
      initialRouteName: 'LogIn',
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    }
  )
);
