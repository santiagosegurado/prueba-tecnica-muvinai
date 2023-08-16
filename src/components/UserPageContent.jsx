import { useTheme } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { UserPageDetails } from "./UserPageDetails";

export const UserPageContent = () => {
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item sm={9} >
        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: 20,
            color: theme.palette.primary.main,
            fontWeight: 500,
            opacity: 0.8,
            mb: 2
          }}
        >
          Datos Personales
        </Typography>
        <UserPageDetails/>
      </Grid>
      <Grid item sm={3}>
        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: 20,
            color: theme.palette.primary.main,
            fontWeight: 500,
            opacity: 0.8
          }}
        >
          Archivos Entrgados
        </Typography>
      </Grid>
    </Grid>
  );
};
