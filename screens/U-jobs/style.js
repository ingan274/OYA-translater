import { StyleSheet } from 'react-native';
import color from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: color.white,
  },
  ButtonContainer: {
    flex: 0.9,
    justifyContent: "center",
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    marginTop: 6,
  },
  back: {
    color: color.blue3,
  },
  dotContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  dots: {
    height: 20,
    resizeMode: 'contain',
  },
  titleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
  },
  back: {
    marginTop: 50,
    marginLeft: 20,
  },
});

export default styles;
