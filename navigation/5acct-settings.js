import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Account from '../screens/V-account';
import About from '../screens/V-about';
import Settings from '../screens/V-settings';

const AccountNavDrawer = createDrawerNavigator({
  Account: {screen: Account},
  Settings: {screen: Settings},
  About: {screen: About},
},
{
  initialRouteName: 'Account',
});

export default createAppContainer(AccountNavDrawer);