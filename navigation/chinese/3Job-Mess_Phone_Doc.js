import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Upload from '../../screensCH/upload';
import Chat from '../../screens-messages/messages';
import Jobs from '../../screensCH/U-jobs';

const AssistanceStack = createSwitchNavigator({
  Upload: {screen: Upload},
  Chat: {screen: Chat},
  Jobs: {screen: Jobs},
},
{
  initialRouteName: 'Jobs',
});

export default createAppContainer(AssistanceStack);