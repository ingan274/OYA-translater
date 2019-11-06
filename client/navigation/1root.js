import { createSwitchNavigator } from 'react-navigation';
import Lang1 from '../screens/Lang1';
import Lang2 from '../screens/Lang2';
import About from '../screens/about';
export default createSwitchNavigator(
  {
    Home: Lang1,
    Language: Lang2,
    About: About
  },
  {
    initialRouteName: 'Home',
  },
);