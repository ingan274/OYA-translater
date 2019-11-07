import { StyleSheet } from 'react-native';
import color from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
    backgroundColor: color.blue3,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 0,
  },
  back: {
    color: color.white,
     marginBottom: 0,
    paddingVertical: 0,
  },
  logo: {
    width: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  textBox: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    paddingTop: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  desc: {
    fontSize: 15,
    paddingTop: 10,
    color: 'white',
  },
  emphesis: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15,
    paddingTop: 10,
    color: 'white',
  }
});

export default styles;