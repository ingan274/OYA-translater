import { StyleSheet } from 'react-native';
import color from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: color.white,
  },
  back: {
    color: color.blue3,
  },
  textContainer: {
    flex: 0.7,
    justifyContent: "center",
    color: color.white,
    paddingHorizontal: 30,
  },
  headerTitle: {
    alignSelf: 'center',
    marginTop: 50,
    color: color.white,
    fontSize: 20,
  },
  ButtonContainer: {
    flex: 1,
    alignSelf: 'center',
    color: color.white,
  },
  back: {
    marginTop: 50,
    marginLeft: 20,
  },
});

export default styles;