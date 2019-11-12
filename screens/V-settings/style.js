import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  }, 
  image: {
    height: 80,
    resizeMode: 'contain',
    width: 80,
  },
  availrow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    borderTopColor: colors.blue3,
    borderTopWidth: 1,
  },
  Profilerow: {
    flexDirection: 'row',
    // alignContent: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 20,
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
  },
  item: {
    color: colors.blue1,
    alignSelf: "center",
    textAlign: "center"
  },
  itemCont: {
    width: 100,
  }
});

export default styles;
