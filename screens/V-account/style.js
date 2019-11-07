import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  }, 
  availTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.darkred,
    marginTop: 30,
  }
});

export default styles;
