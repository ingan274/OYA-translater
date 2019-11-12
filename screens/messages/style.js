import { StyleSheet } from 'react-native';
import color from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
    backgroundColor: color.blue1,
  },
  Textcontainer: {
    backgroundColor: color.white,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    alignItems: 'center',
    marginTop: 55,
  },
  back: {
    color: color.white,
     marginBottom: 0,
    paddingVertical: 0,
  }
});

export default styles;