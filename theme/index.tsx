import {
  createMuiTheme,
  Theme,
  PaletteColorOptions,
  ThemeOptions,
  SimplePaletteColorOptions,
} from "@material-ui/core";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import { StyledTheme } from "styled-components";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8A95D3",
      light: "#ACB6F1",
      dark: "#4C58A4",
      contrastText: "#fff",
    },

    secondary: {
      main: "#fff",
      light: "#FFDD71",
      dark: "#C77C02",
      contrastText: "#fff",
    },
  },

  typography: {
    fontFamily: "Suez One",
  },
});

export default theme;

export const styledTheme: StyledTheme = {
  palette: {
    primary: {
      main: "#8A95D3",
      light: "#ACB6F1",
      dark: "#4C58A4",
      darker: "#4e5ba5",
      contrastText: "#fff",
    },

    secondary: {
      main: "#fff",
      light: "#FFDD71",
      dark: "#C77C02",
      contrastText: "#fff",
    },

    background: {
      light: "#e5e5e5",
      main: "#F2F5F7",
      secondary: "#fff",
      white: "#fff",
    },
  },

  typography: {
    fontFamily: "Suez One",
  },
};
