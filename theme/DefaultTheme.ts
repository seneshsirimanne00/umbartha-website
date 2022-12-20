import { ITheme } from "./types";

const defaultTheme: ITheme = {
  colors: {
    primary: {
      light: "red",
      medium: "",
      dark: "#FF7773",
    },
    secondary: {
      light: "",
      medium: "",
      dark: "",
    },
    default: {
      light: "",
      medium: "",
      dark: "",
    },
    danger: {
      light: "",
      medium: "",
      dark: "",
    },
    success: {
      light: "",
      medium: "",
      dark: "",
    },

    background: {
      light: "",
      medium: "",
      dark: "",
    },
  },
  fonts: {
    primary: `'Lato', sans-serif`,
    secondary: `"Josefin Sans", Sans-serif;`,
    size: {
      medium: "16px",
      small: "14px",
      large: "18px",
    },
    weight: { normal: 500, strong: 600, weak: 400 },
    lineHeight: {
      small: "14px",
      large: "18px",
    },
    color: {
      light: "",
      medium: "",
      dark: "",
    },
  },
  padding: {
    small: "",
    medium: "",
    large: "",
  },
  radius: {
    small: "",
    medium: "",
    large: "",
  },
  border: {
    small: "",
    medium: "",
    large: "",
  },
  margin: {
    small: "",
    medium: "",
    large: "",
  },
  zIndex: {
    layer1: 0,
    layer2: 10,
    layer3: 100,
  },
};
export default defaultTheme;
