import { useTheme } from "@emotion/react";
import { Alert, Box, Grid, Snackbar } from "@mui/material";
import { UserPageDetails } from "./UserPageDetails";
import { UserPageFiles } from "./UserPageFiles";
import { UserPageTimeline } from "./UserPageTimeline";
import { CustomButton } from "./CustomButton";
import { CouponList } from "./CouponList";
import { CustomTitle } from "./CustomTitle";
import { TrackEditionUserPage } from "./TrackEditionUserPage";
import { useState } from "react";

export const UserPageContent = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
            <CustomTitle
              fontSize={20}
              fontWeight={500}
              title={"Datos Personales"}
              opacity={0.6}
              color={theme.palette.primary.main}
              margin={"0px 0px 16px 0px"}
            />
            <UserPageDetails />
            <CustomButton
              fontSize={16}
              padding={"10px 20px"}
              text={"Guardar"}
              handleClick={handleClick}
            />
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Perfil modificado con exito!
              </Alert>
            </Snackbar>
          </Box>
        </Grid>
        <Grid item sm={4}>
          <CustomTitle
            fontSize={20}
            fontWeight={500}
            title={"Apto medico"}
            opacity={0.6}
            color={theme.palette.primary.main}
            margin={"0px 0px 16px 0px"}
          />
          <UserPageFiles />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={6}>
          <CustomTitle
            fontSize={20}
            fontWeight={500}
            title={"Historial de pagos"}
            opacity={0.6}
            color={theme.palette.primary.main}
            margin={"0px 0px 16px 0px"}
          />
          <UserPageTimeline />
        </Grid>
        <Grid item sm={6}>
          <CustomTitle
            fontSize={20}
            fontWeight={500}
            title={"Cupones"}
            opacity={0.6}
            color={theme.palette.primary.main}
            margin={"0px 0px 16px 0px"}
          />
          <CouponList />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={6}>
          <CustomTitle
            fontSize={20}
            fontWeight={500}
            title={"Historial de edicion"}
            opacity={0.6}
            color={theme.palette.primary.main}
            margin={"0px 0px 16px 0px"}
          />
          <TrackEditionUserPage />
        </Grid>
        <Grid item sm={6}></Grid>
      </Grid>

      <Box
        sx={{
          border: 1,
          borderColor: theme.palette.error.main,
          borderRadius: 2,
          p: 2,
        }}
      >
        <CustomTitle
          fontSize={20}
          fontWeight={500}
          title={"Zona peligrosa"}
          opacity={0.6}
          color={theme.palette.error.main}
          margin={"0px 0px 16px 0px"}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <CustomTitle
              fontSize={17}
              fontWeight={500}
              title={"Invalidar acceso"}
              opacity={1}
              color={theme.palette.button.main}
              margin={"0px 0px 0px 0px"}
            />
            <CustomTitle
              fontSize={14}
              fontWeight={400}
              title={
                "Funcionalidad para socios que se arrepienten de su compra y recuperan el 100% de su compra."
              }
              opacity={0.8}
              color={theme.palette.button.main}
              margin={"0px 0px 0px 0px"}
            />
          </Box>
          <CustomButton
            color={"error"}
            fontSize={18}
            text={"Invalidar"}
            padding={"10px 40px"}
          />
        </Box>
      </Box>
    </>
  );
};
