import { Alert, Box, IconButton, Snackbar } from "@mui/material";
import { Email, WhatsApp } from "@mui/icons-material/";
import { CustomButton } from "./CustomButton";
import { useState } from "react";

export const UserPageBotton = () => {
  const [open, setOpen] = useState(0);

  const handleClick = (num) => {
    setOpen(num);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const botttomContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    mt: 1,
  };

  return (
    <Box sx={botttomContainer}>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <CustomButton
          color={"error"}
          text={"Dar baja"}
          fontSize={18}
          padding={"10px 40px"}
          handleClick={() => handleClick(1)}
        />
        <Snackbar
          open={open === 1}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Socio dado de baja con exito!
          </Alert>
        </Snackbar>

        <CustomButton
          text={"Dar alta"}
          fontSize={18}
          padding={"10px 40px"}
          handleClick={() => handleClick(2)}
        />
        <Snackbar
          open={open === 2}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Socio dado de alta con exito!
          </Alert>
        </Snackbar>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <IconButton size="large">
          <Email sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton size="large" color="primary" target="_blank" href="https://wa.link/9ruylc">
          <WhatsApp sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
    </Box>
  );
};
