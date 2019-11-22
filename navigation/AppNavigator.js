import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Lang1 from '../screens/lang1';
import Chinese from './chinese/2lang2-job_Vlogin';
import Spanish from './spanish/2lang2-job_Vlogin';
import English from './eng/2lang2-job_Vlogin';
import About from '../screens/about';

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: { screen: Lang1 },
      English: { screen: English },
      Chinese: { screen: Chinese },
      Spanish: { screen: Spanish },
      About: { screen: About }
    },
    {
      initialRouteName: 'Home',
    },
  )
)

// import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import Upload from '../screens/upload';
// import Chat from '../screens-messages/messages';
// import Account from '../screens/V-account';

// const AssistanceStack = createSwitchNavigator({
//   Upload: {screen: Upload},
//   Chat: {screen: Chat},
//   Account: {screen: Account},
// },
// {
//   initialRouteName: 'Chat',
// });

// export default createAppContainer(AssistanceStack);