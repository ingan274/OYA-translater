import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Account from '../screens/V-account';
import About from '../screens/V-about';
import Settings from '../screens/V-settings';
import Logout from '../screens/V-logout'

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