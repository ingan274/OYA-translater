import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Upload from '../../screensCH/upload';
import Chat from '../../screensCH/V-messages';
import Account from '../../screensCH/V-account';

const AssistanceStack = createSwitchNavigator({
  Upload: {screen: Upload},
  Chat: {screen: Chat},
  Account: {screen: Account},
},
{
  initialRouteName: 'Account',
});

export default createAppContainer(AssistanceStack);