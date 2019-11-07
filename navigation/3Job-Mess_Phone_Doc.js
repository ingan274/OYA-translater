import { createStackNavigator, createAppContainer } from 'react-navigation';
import Upload from '../screens/upload';
import Chat from '../screens/messages';
import Jobs from '../screens/U-jobs';

const AssistanceStack = createStackNavigator({
  Upload: {screen: Upload},
  Chat: {screen: Chat},
  Jobs: {screen: Jobs},
},
{
  initialRouteName: 'Jobs',
});

export default createAppContainer(AssistanceStack);