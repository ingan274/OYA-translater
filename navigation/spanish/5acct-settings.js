import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Account from './6vaccount-jobs';
import About from '../../screensSP/V-about';
import Settings from '../../screensSP/V-settings';
import Logout from '../../screensSP/V-logout'

// import Logout from './6logout-login-home'

import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings(['Require cycle:']);

const AccountNavDrawer = createDrawerNavigator({
  Account: {screen: Account},
  Settings: {screen: Settings},
  About: {screen: About},
  Logout:  {screen: Logout},
},
{
  initialRouteName: 'Account',
});

export default createAppContainer(AccountNavDrawer);