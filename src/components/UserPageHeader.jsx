import { Box, Button, Typography } from "@mui/material";
import { KeyboardBackspaceOutlined, EastOutlined } from "@mui/icons-material";

export const UserPageHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Button
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          textTransform: "capitalize",
          fontFamily: "inherit",
          color: "#333",
          borderRadius: 50,
        }}
      >
        <KeyboardBackspaceOutlined />
        <Typography sx={{ fontFamily: "inherit" }}>Atras</Typography>
      </Button>

      <Button
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          textTransform: "capitalize",
          fontFamily: "inherit",
          color: "#333",
          borderRadius: 50,
        }}
      >
        <Typography sx={{ fontFamily: "inherit" }}>Siguiente Perfil</Typography>
        <EastOutlined />
      </Button>
    </Box>
  );
};
