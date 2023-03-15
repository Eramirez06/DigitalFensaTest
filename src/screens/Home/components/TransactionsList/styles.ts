import {StyleSheet} from 'react-native';
import Theme from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  title: {
    fontFamily: Theme.fonts.semibold,
    color: Theme.colors.grey,
    fontSize: Theme.fontSizes.xSmall,
  },
  listContainer: {
    width: '100%',
    backgroundColor: Theme.colors.white,
    borderRadius: 10,
    paddingVertical: 23,
    flex: 1,
  },
  contentList: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
});
export default styles;
