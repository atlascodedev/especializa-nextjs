import { styledTheme } from "./theme";

// Attempted to use Typescript utility types, althought it did work (as it did not throw any exceptions) the intellisense refused to pick up the typing, even after restarting the typescript server multiple times

declare module "styled-components" {
  export interface StyledTheme {
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };

      background: {
        main: string;
        light: string;
        secondary: string;
      };
    };

    typography: {
      fontFamily: string;
    };
  }
}
