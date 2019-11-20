import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Upload from '../../screensSP/upload';
// import Chat from '../../screens-messages/V-messagesSP';
import Account from '../../screensSP/V-account';

const AssistanceStack = createSwitchNavigator({
  Upload: {screen: Upload},
  Chat: {screen: Chat},
  Account: {screen: Account},
},
{
  initialRouteName: 'Account',
});

export default createAppContainer(AssistanceStack);