import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#05a180",
    },
    secondary:{
      main: '#C4C4C4'
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#05a180",
    },
  },
});
