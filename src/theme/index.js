import { createTheme } from "@mui/material";


export const themeLight = createTheme({
  palette: {
    primary: {
      main: "#05a180",
    },
    secondary: {
      main: "#F5F5F5",
    },
    container: {
      main: "#FFFFFF",
    },
    button: {
      main: "#333",
    },
    error: {
      main: "#ff6a69",
    },
  },
});

export const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#05a180",
    },
    secondary: {
      main: "#3e3e3e",
    },
    container: {
      main: "#333",
    },
    button: {
      main: "#FFF",
    },
    error: {
      main: "#ff6a69",
    },
  },
});

