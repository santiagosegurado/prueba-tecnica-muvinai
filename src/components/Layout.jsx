import { Box, Grid } from "@mui/material";
import { Sidebar } from "./Sidebar";
import { UserPage } from "./UserPage";
import { useTheme } from "@emotion/react";

export const Layout = () => {
  const theme = useTheme();

  const mainContainer = {
    height: "100vh",
    p: 2,
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  };

  const userPageContainer = {
    background: theme.palette.container.main,
    height: "calc(100vh - 36px)",
    paddingBlock: 3,
    paddingInline: 4,
    borderRadius: 10,
  };

  return (
    <Box sx={mainContainer}>
      <Grid container maxWidth="xl">
        <Grid item sm={3}>
          <Sidebar />
        </Grid>
        <Grid item sm={9} sx={userPageContainer}>
          <UserPage />
        </Grid>
      </Grid>
    </Box>
  );
};
