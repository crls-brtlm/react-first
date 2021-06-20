import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#004b7b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#5bc0be",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", Helvetica, Arial, sans-serif',
  },
};

const muiTheme = createMuiTheme(themeOptions);

export { muiTheme };
