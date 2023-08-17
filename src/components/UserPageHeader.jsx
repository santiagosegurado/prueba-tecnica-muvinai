import { Box, Button } from "@mui/material";
import { KeyboardBackspaceOutlined, EastOutlined } from "@mui/icons-material";
import { CustomTitle } from "./CustomTitle";
import { useTheme } from "@emotion/react";

export const UserPageHeader = () => {
  const theme = useTheme();

  const headerContainer = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    mb: 1,
  };

  const containerButton = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
    textTransform: "capitalize",
    fontFamily: "inherit",
    color: theme.palette.button.main,
    borderRadius: 50,
  };

  return (
    <Box sx={headerContainer}>
      <Button sx={containerButton}>
        <KeyboardBackspaceOutlined />
        <CustomTitle title={"Atras"} />
      </Button>

      <Button sx={containerButton}>
        <CustomTitle title={"Siguiente perfil"} />
        <EastOutlined />
      </Button>
    </Box>
  );
};
