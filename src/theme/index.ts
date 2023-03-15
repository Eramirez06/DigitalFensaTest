import {Platform} from 'react-native';
import {ITheme} from './types';

const Theme: ITheme = {
  colors: {
    primary: '#334FFA',
    secondary: '#f7f7f7',
    white: '#fff',
    black: '#000',
    red: '#FF0000',
    green: '#00B833',
    grey: '#9B9898',
    purple: '#CFD6FF',
  },
  fonts: {
    regular: Platform.OS === 'ios' ? 'Avenir-Regular' : 'Avenir Regular',
    semibold: Platform.OS === 'ios' ? 'Avenir-Black' : 'Avenir Black',
    bold: Platform.OS === 'ios' ? 'Avenir-Heavy' : 'Avenir Heavy',
  },
  fontSizes: {
    xSmall: 14,
    small: 16,
    regular: 20,
    large: 24,
    xLarge: 32,
  },
};

export default Theme;
