import { StyleSheet } from 'react-native';
import color from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.blue1,
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
  }
});

export default styles;