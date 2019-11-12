import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Upload from '../screens/upload';
import Chat from '../screens/V-messages';
import Account from '../screens/V-account';

const AssistanceStack = createSwitchNavigator({
  Upload: {screen: Upload},
  Chat: {screen: Chat},
  Account: {screen: Account},
},
{
  initialRouteName: 'Account',
});

export default createAppContainer(AssistanceStack);