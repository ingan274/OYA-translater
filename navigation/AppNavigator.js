// import React from 'react';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import Lang1 from '../screens/lang1';
// import Lang2 from './2lang2-job_Vlogin';
// import About from '../screens/about';

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       Home: { screen: Lang1 },
//       Language: { screen: Lang2 },
//       About: { screen: About }
//     },
//     {
//       initialRouteName: 'Home',
//     },
//   )
// )

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
