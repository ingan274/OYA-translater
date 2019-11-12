import { StyleSheet } from 'react-native';
import color from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.cream,
    alignItems: "center",
    // justifyContent: "space-between"
  },
  logo: {
    width: 100,
    height: 30,
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
    marginTop: 50,
  }, 
  formLabel: {
    fontSize: 18,
  },
  SU: {
    alignSelf: "center",
    marginTop: 30,
  },
  error: {
    color: color.softRed,
    fontSize: 15,
    marginTop: 15,
  },
});

export default styles;