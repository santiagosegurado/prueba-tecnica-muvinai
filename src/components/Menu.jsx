import { Box, Button, Divider, Stack } from "@mui/material";
import {
  DashboardOutlined,
  PersonOutlineOutlined,
  SettingsOutlined,
  AccountBalanceOutlined,
  DateRangeOutlined,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { KeyboardArrowRight } from "@mui/icons-material";
import { CustomTitle } from "./CustomTitle";

export const Menu = () => {
  const theme = useTheme();

  const linkContainer = {
    color: theme.palette.button.main,
    opacity: 0.6,
    display: "flex",
    gap: 2,
    padding: "20px",
    cursor: "pointer",
    fontFamily: "inherit",
    textTransform: "capitalize",
    justifyContent: "flex-start",
    borderRadius: 50,
  };

  const linkActiveContainer = {
    color: theme.palette.primary.main,
    display: "flex",
    gap: 3,
    backgroundColor: "rgba(5, 161, 128, 0.2)",
    padding: "20px",
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "space-between",
    width: "100%",
    cursor: "pointer",
    textTransform: "capitalize",
    fontFamily: "inherit",
  };

  return (
    <Stack gap={1}>
      <Button sx={linkContainer}>
        <DashboardOutlined />
        <CustomTitle title={"Dashboard"} />
      </Button>
      <Button sx={linkContainer}>
        <DateRangeOutlined />
        <CustomTitle title={"Calendario"} />
      </Button>
      <Button sx={linkActiveContainer}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <PersonOutlineOutlined
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          />
          <CustomTitle
            title={"Socios"}
            fontWeight={600}
            color={theme.palette.primary.main}
          />
        </Box>
        <KeyboardArrowRight
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 600,
          }}
        />
      </Button>
      <Button sx={linkContainer}>
        <AccountBalanceOutlined />
        <CustomTitle title={"Pagos"} />
      </Button>
      <Divider sx={{ marginBlock: 2, width: "90%", alignSelf: "center" }} />
      <Button sx={linkContainer}>
        <SettingsOutlined />
        <CustomTitle title={"Ajustes"} />
      </Button>
    </Stack>
  );
};
