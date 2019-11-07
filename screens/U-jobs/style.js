import { StyleSheet } from 'react-native';
import color from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: color.white,
  },
  dotContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  dots: {
    height: 20,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 28,
  },
  back: {
    marginTop: 50,
    marginLeft: 20,
  },
  subhead: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 20,
  },
});

export default styles;
