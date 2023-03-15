import {Platform, StyleSheet} from 'react-native';
import Theme from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: Platform.OS === 'android' ? 20 : 10,
  },
  title: {
    fontFamily: Theme.fonts.semibold,
    fontSize: Theme.fontSizes.regular,
    color: Theme.colors.black,
  },
  subTitle: {
    fontFamily: Theme.fonts.regular,
    fontSize: Theme.fontSizes.small,
    color: Theme.colors.black,
  },
});
export default styles;
