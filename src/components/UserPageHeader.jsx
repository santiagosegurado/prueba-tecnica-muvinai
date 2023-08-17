import { Box, Button } from "@mui/material";
import { KeyboardBackspaceOutlined, EastOutlined } from "@mui/icons-material";
import { CustomTitle } from "./CustomTitle";
import { useTheme } from "@emotion/react";

export const UserPageHeader = () => {
  const theme = useTheme()
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
          color: theme.palette.button.main,
          borderRadius: 50,
        }}
      >
        <KeyboardBackspaceOutlined />
        <CustomTitle title={"Atras"} />
      </Button>

      <Button
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          textTransform: "initial",
          fontFamily: "inherit",
          color: theme.palette.button.main,
          borderRadius: 50,
        }}
      >
        <CustomTitle title={"Siguiente perfil"} />
        <EastOutlined />
      </Button>
    </Box>
  );
};
