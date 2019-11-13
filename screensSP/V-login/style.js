import { StyleSheet } from 'react-native';
import color from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.blue1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }, 
  title: {
    fontSize: 20,
  }, 
  SU: {
    alignSelf: "center",
    marginTop: 30,
  },
  error: {
    color: color.softRed,
    fontSize: 15,
    marginTop: 15,
  }
});

export default styles;