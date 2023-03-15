import {StyleSheet} from 'react-native';
import Theme from 'theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 11,
  },
  productName: {
    fontFamily: Theme.fonts.semibold,
    color: Theme.colors.black,
    fontSize: Theme.fontSizes.small,
  },
  date: {
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.black,
    fontSize: Theme.fontSizes.xSmall,
    marginTop: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionBalance: {
    fontFamily: Theme.fonts.semibold,
    color: Theme.colors.black,
    fontSize: Theme.fontSizes.small,
    marginRight: 20,
  },
  symbol: {
    fontFamily: Theme.fonts.semibold,
    color: Theme.colors.black,
    fontSize: Theme.fontSizes.small,
    marginRight: 5,
    width: 10,
  },
  minus: {
    color: Theme.colors.red,
  },
  plus: {
    color: Theme.colors.green,
  },
});
export default styles;
