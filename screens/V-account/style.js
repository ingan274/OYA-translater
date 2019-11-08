import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  }, 
  image: {
    height: 100,
    resizeMode: 'contain',
    width: 100,
  },
  availrow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  Profilerow: {
    flexDirection: 'row',
    // alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  message: {
    position: 'relative'
  },
  Notification: {
    position: 'absolute',
    left: 110,
  },
  noneNotification: {
    position: 'absolute',
    height: 0,
  },
  menu: {
    paddingLeft: 30,
    marginTop: 40,
  }
});

export default styles;
