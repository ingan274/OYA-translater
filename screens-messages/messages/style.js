import { StyleSheet } from 'react-native';
import color from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
    backgroundColor: color.white,
  },
  textContainer: {
    backgroundColor: color.white,
    // justifyContent: "center",
     alignItems: "center"
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    marginTop: 55,
  },
  back: {
    color: color.blue4,
     marginBottom: 0,
    paddingVertical: 0,
  },
  unavail: {
    textAlign: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
});

export default styles;