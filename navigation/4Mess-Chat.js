import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Jobs from '../screens/U-jobs';
import Chat from '../screens/messages';

export default createAppContainer(
  createSwitchNavigator(
    {
      Jobs: { screen: Jobs },
      Chat: { screen: Chat }
    },
    {
      initialRouteName: 'Jobs',
    },
  )
)