import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Account from './6vaccount-jobs';
import About from '../../screensCH/V-about';
import Settings from '../../screensCH/V-settings';
import Logout from '../../screensCH/V-logout'

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