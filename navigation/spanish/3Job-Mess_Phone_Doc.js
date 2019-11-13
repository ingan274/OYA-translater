import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Upload from '../../screensSP/upload';
import Chat from '../../screensSP/messages';
import Jobs from '../../screensSP/U-jobs';

const AssistanceStack = createSwitchNavigator({
  Upload: {screen: Upload},
  Chat: {screen: Chat},
  Jobs: {screen: Jobs},
},
{
  initialRouteName: 'Jobs',
});

export default createAppContainer(AssistanceStack);