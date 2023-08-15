import { Container, Grid } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { UserPage } from "./components/UserPage";

function App() {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "secondary", height: "100vh", p: 2}}>
      <Grid container>
        <Grid item lg={3}>
          <Sidebar />
        </Grid>
        <Grid item lg={9} >
          <UserPage />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
