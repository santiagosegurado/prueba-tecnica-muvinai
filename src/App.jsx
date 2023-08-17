import { ThemeProvider } from "@emotion/react";
import { themeDark, themeLight } from "./theme";
import { CssBaseline } from "@mui/material";
import { Layout } from "./components/Layout";
import { useModeStore } from "./store/modeStore";

function App() {

  const mode = useModeStore(store => store.mode)

  return (
    <ThemeProvider theme={ mode === 'light' ? themeLight : themeDark}>
      <CssBaseline />

      <Layout />
    </ThemeProvider>
  );
}

export default App;
