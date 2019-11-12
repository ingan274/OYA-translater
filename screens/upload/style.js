import { StyleSheet } from 'react-native';
import color from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
    backgroundColor: color.white,
  },
  Textcontainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: color.blue1,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    alignItems: 'center',
    marginTop: 55,
  },
  back: {
    color: color.blue3,
     marginBottom: 0,
    paddingVertical: 0,
  },
  button: {
    alignItems: 'center',
    backgroundColor: color.blue4,
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginBottom: 30,
    borderRadius: 10,
    marginHorizontal: 50,
    width: 300
  },
  btntext: {
    color: color.white,
    fontSize: 20,
    textAlign: "center"
  },
  title: {
    fontSize: 20,
    marginTop: 50,
    alignSelf: "center"
  }, 
  logo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
    alignSelf: "center"
  },
});

export default styles;