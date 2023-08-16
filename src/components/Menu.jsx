import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import {
  DashboardOutlined,
  SplitscreenOutlined,
  PersonOutlineOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { KeyboardArrowRight } from "@mui/icons-material";

export const Menu = () => {
  const theme = useTheme();

  return (
    <Stack gap={3}>
      <Button
        sx={{
          color: "#333",
          opacity: 0.6,
          display: "flex",
          gap: 2,
          padding: "20px",
          cursor: "pointer",
          fontFamily: "inherit",
          textTransform: "capitalize",
          justifyContent: "flex-start",
          borderRadius: 50,
        }}
      >
        <DashboardOutlined />
        <Typography sx={{ fontFamily: "inherit" }}>Dashboard</Typography>
      </Button>
      <Button
        sx={{
          color: "#333",
          opacity: 0.6,
          display: "flex",
          gap: 2,
          padding: "20px",
          cursor: "pointer",
          fontFamily: "inherit",
          textTransform: "capitalize",
          justifyContent: "flex-start",
          borderRadius: 50,
        }}
      >
        <SplitscreenOutlined />
        <Typography sx={{ fontFamily: "inherit" }}>Tareas</Typography>
      </Button>
      <Button
        sx={{
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
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <PersonOutlineOutlined
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          />
          <Typography
            sx={{
              fontFamily: "inherit",
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          >
            Socios
          </Typography>
        </Box>
        <KeyboardArrowRight
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 600,
          }}
        />
      </Button>
      <Divider sx={{ marginBlock: 2, width: "90%", alignSelf: "center" }} />
      <Button
        sx={{
          color: "#333",
          opacity: 0.6,
          display: "flex",
          gap: 2,
          padding: "20px",
          cursor: "pointer",
          fontFamily: "inherit",
          textTransform: "capitalize",
          justifyContent: "flex-start",
          borderRadius: 50,
        }}
      >
        <SettingsOutlined />
        <Typography sx={{ fontFamily: "inherit" }}>Ajustes</Typography>
      </Button>
    </Stack>
  );
};