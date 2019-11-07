import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Language from '../screens/lang2';
import Jobs from '../screens/U-jobs';

export default createAppContainer(
  createSwitchNavigator(
    {
      Jobs: { screen: Jobs },
      Language: { screen: Language }
    },
    {
      initialRouteName: 'Jobs',
    },
  )
)
