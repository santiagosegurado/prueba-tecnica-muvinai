import { Container, Grid } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { UserPage } from "./components/UserPage";
import { useTheme } from "@emotion/react";

function App() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
        p: 2,
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Grid container>
        <Grid item lg={3}>
          <Sidebar />
        </Grid>
        <Grid
          item
          lg={9}
          sx={{
            background: "#FFF",
            height: "calc(100vh - 36px)",
            paddingBlock: 3,
            paddingInline: 4,
            borderRadius: 10
          }}
        >
          <UserPage />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
