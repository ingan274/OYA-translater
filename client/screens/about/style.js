import { StyleSheet } from 'react-native';
import color from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
    backgroundColor: color.blue1,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  dots: {
    width: 100,
    resizeMode: 'contain',
  },
  dotContainer: {
    flex: 1,
    alignItems: "center",
  },
  back: {
    color: color.blue3,
  },
  textBox: {
    paddingHorizontal: 30,
  }
});

export default styles;