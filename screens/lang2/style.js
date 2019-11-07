import { StyleSheet } from 'react-native';
import color from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: color.white,
  },
  infoContainer: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  dots: {
    width: 100,
    resizeMode: 'contain',
  },
  dotContainer: {
    flex: 1,
    alignItems: 'center',
  },
  back: {
    color: color.blue3,
  },
  account: {
    color: color.blue3,
  },
  subhead: {
    paddingHorizontal: 50,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 50,
  },
});

export default styles;
