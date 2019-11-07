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
  info: {
    marginTop: 45,
    color: color.blue4,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 200,
    resizeMode: 'contain',
    marginBottom: 0,
    padding: 0,
  },
  subhead: {
    paddingHorizontal: 50,
    textAlign: 'center',
    fontSize: 15,
    marginTop: 0,
  },
});

export default styles;
