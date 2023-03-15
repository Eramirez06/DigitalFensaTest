export interface IColors {
  primary: string;
  secondary: string;
  black: string;
  white: string;
  green: string;
  red: string;
  grey: string;
  purple: string;
}

export interface IFonts {
  regular: string;
  semibold: string;
  bold: string;
}

export interface IFontSizes {
  xSmall: number;
  small: number;
  regular: number;
  large: number;
  xLarge: number;
}

export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  fontSizes: IFontSizes;
}
