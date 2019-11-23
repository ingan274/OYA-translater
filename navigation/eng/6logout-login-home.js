import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Logout from '../../screens/V-logout';
import Login from './3-4login-signup';
import Home from './1start';
const LogoutSwitch = createSwitchNavigator({
  Logout: {screen: Logout},
  Login: {screen: Login},
  Home: {screen: Home},
},
{
  initialRouteName: 'Logout',
});

export default createAppContainer(LogoutSwitch);