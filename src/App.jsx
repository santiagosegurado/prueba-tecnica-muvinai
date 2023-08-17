import { Box, Grid } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { UserPage } from "./components/UserPage";
import { useTheme } from "@emotion/react";

function App() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        p: 2,
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        justifyContent: "center",
        overflow: 'hidden'
      }}
    >
      <Grid container maxWidth="xl">
        <Grid item sm={3}>
          <Sidebar />
        </Grid>
        <Grid
          item
          sm={9}
          sx={{
            background: theme.palette.container.main,
            height: "calc(100vh - 36px)",
            paddingBlock: 3,
            paddingInline: 4,
            borderRadius: 10,
          }}
        >
          <UserPage />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
