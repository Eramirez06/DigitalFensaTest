import {StyleSheet} from 'react-native';
import Theme from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.primary,
    borderRadius: 10,
  },
  rowButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    fontSize: Theme.fontSizes.small,
  },
});
export default styles;
