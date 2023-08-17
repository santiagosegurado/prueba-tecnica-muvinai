import { Box, IconButton } from "@mui/material";
import { Email, WhatsApp } from "@mui/icons-material/";
import { CustomButton } from "./CustomButton";

export const UserPageBotton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <CustomButton
          color={"error"}
          text={"Dar baja"}
          fontSize={18}
          padding={"10px 40px"}
        />
        <CustomButton text={"Dar alta"} fontSize={18} padding={"10px 40px"} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <IconButton size="large">
          <Email sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton size="large" color="primary">
          <WhatsApp sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
    </Box>
  );
};
