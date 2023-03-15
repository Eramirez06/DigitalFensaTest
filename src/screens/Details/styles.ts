import Theme from 'theme';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customHeaderStyle: {
    backgroundColor: Theme.colors.purple,
  },
  customHeader: {
    backgroundColor: Theme.colors.purple,
    justifyContent: 'flex-end',
    height: 110,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    backgroundColor: Theme.colors.secondary,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: Platform.OS === 'android' ? 250 : 350,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    marginTop: 32,
    fontSize: Theme.fontSizes.small,
    color: Theme.colors.grey,
    fontFamily: Theme.fonts.semibold,
  },
  information: {
    marginTop: 20,
    fontSize: Theme.fontSizes.small,
    color: Theme.colors.black,
    fontFamily: Theme.fonts.semibold,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 20,
  },
});
export default styles;
