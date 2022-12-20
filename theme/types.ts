export interface ITheme {
  colors: IColors;
  fonts: IFont;
  padding: IPadding;
  radius: IRadius;
  border: IBorder;
  margin: IMargin;
  zIndex: IZIndex;
}

export interface IColors {
  primary: IColor;
  secondary: IColor;
  default: IColor;
  success: IColor;
  danger: IColor;
  background: IColor;
}

export interface IColor {
  light: string;
  medium: string;
  dark: string;
}

export interface IFont {
  primary: string;
  secondary: string;
  size: {
    medium: string;
    small: string;
    large: string;
  };
  weight: {
    normal: number;
    strong: number;
    weak: number;
  };
  color: IColor;
  lineHeight: {
    small: string;
    large: string;
  };
}

export interface IPadding {
  small: string;
  medium: string;
  large: string;
}

export interface IRadius {
  small: string;
  medium: string;
  large: string;
}

export interface IBorder {
  small: string;
  medium: string;
  large: string;
}

export interface IMargin {
  small: string;
  medium: string;
  large: string;
}

export interface IZIndex {
  layer1: number;
  layer2: number;
  layer3: number;
}
