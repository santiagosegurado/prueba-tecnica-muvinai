import { Box, FormControlLabel, FormGroup, Stack } from "@mui/material";
import { MaterialUISwitch } from "./MaterialUISwitch";
import { AvatarContainer } from "./AvatarContainer";
import { Menu } from "./Menu";
import { useModeStore } from "../store/modeStore";

export const Sidebar = () => {
  const setMode = useModeStore((store) => store.setMode);

  const sidebarContainer = {
    display: "flex",
    flexDirection: "column",
    paddingRight: "37px",
    gap: 3,
    paddingTop: 1,
  };

  const logoContainer = { display: "flex", justifyContent: "space-between" };

  return (
    <Box height="100%" sx={sidebarContainer}>
      <Box sx={logoContainer}>
        <img
          src="https://www.glofox.com/wp-content/uploads/2023/06/Glofox-logo.svg?07.07.2023"
          alt="Logo"
          width={140}
        />
        <FormGroup>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} />}
            onChange={(e) => setMode(e.target.checked)}
          />
        </FormGroup>
      </Box>
      <Stack gap={3} direction="column">
        <AvatarContainer />
        <Menu />
      </Stack>
    </Box>
  );
};
