import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import { UserPageDetails } from "./UserPageDetails";
import { UserPageFiles } from "./UserPageFiles";
import { UserPageTimeline } from "./UserPageTimeline";

export const UserPageContent = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={5}>
      <Grid
        item
        sm={8}
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 20,
              color: theme.palette.primary.main,
              fontWeight: 500,
              opacity: 0.8,
              mb: 2,
            }}
          >
            Datos Personales
          </Typography>
          <UserPageDetails />
        </Box>
        <UserPageTimeline />
      </Grid>
      <Grid item sm={4}>
        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: 20,
            color: theme.palette.primary.main,
            fontWeight: 500,
            opacity: 0.8,
            mb: 2,
          }}
        >
          Apto medico
        </Typography>
        <UserPageFiles />
      </Grid>
    </Grid>
  );
};
