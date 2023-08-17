import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import { UserPageDetails } from "./UserPageDetails";
import { UserPageFiles } from "./UserPageFiles";
import { UserPageTimeline } from "./UserPageTimeline";
import { CustomButton } from "./CustomButton";
import { CouponList } from "./CouponList";
// import { TrackEditionUserPage } from "./TrackEditionUserPage";

export const UserPageContent = () => {
  const theme = useTheme();

  return (
    <>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: 20,
                color: theme.palette.primary.main,
                fontWeight: 500,
                opacity: 0.6,
                mb: 2,
              }}
            >
              Datos Personales
            </Typography>
            <UserPageDetails />
            <CustomButton
              fontSize={16}
              padding={"10px 20px"}
              text={"Guardar"}
            />
          </Box>
        </Grid>
        <Grid item sm={4}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 20,
              color: theme.palette.primary.main,
              fontWeight: 500,
              opacity: 0.6,
              mb: 2,
            }}
          >
            Apto medico
          </Typography>
          <UserPageFiles />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={6}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 20,
              color: theme.palette.primary.main,
              fontWeight: 500,
              opacity: 0.6,
              mb: 2,
            }}
          >
            Historial de pagos
          </Typography>
          <UserPageTimeline />
        </Grid>
        <Grid item sm={6}>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 20,
              color: theme.palette.primary.main,
              fontWeight: 500,
              opacity: 0.6,
              mb: 2,
            }}
          >
            Cupones
          </Typography>
          <CouponList />
        </Grid>
      </Grid>
    </>
  );
};
