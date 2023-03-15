import Theme from 'theme';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontFamily: Theme.fonts.semibold,
    color: Theme.colors.grey,
    fontSize: Theme.fontSizes.xSmall,
  },
  pointsContainer: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
    minHeight: 143,
    backgroundColor: Theme.colors.primary,
    borderRadius: 20,
    paddingHorizontal: 19,
    paddingVertical: 21,
    shadowColor: Theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 11,
  },
  currentDate: {
    fontFamily: Theme.fonts.semibold,
    fontSize: Theme.fontSizes.small,
    color: Theme.colors.white,
  },
  currentBalance: {
    alignSelf: 'center',
    marginTop: 10,
    color: Theme.colors.white,
    fontSize: Theme.fontSizes.xLarge,
    fontFamily: Theme.fonts.semibold,
    lineHeight: Platform.OS === 'android' ? 42 : 40,
    letterSpacing: 2,
  },
});
export default styles;
