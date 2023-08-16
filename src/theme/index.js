import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    // Usar zustand
    mode: "light",
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
  },
});
