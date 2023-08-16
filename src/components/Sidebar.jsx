import { Box, FormControlLabel, FormGroup, Stack } from "@mui/material";
import { MaterialUISwitch } from "./MaterialUISwitch";
import { AvatarContainer } from "./AvatarContainer";
import { Menu } from "./Menu";

export const Sidebar = () => {
  return (
    <Box
      height="100%"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "37px",
        gap: 3,
        paddingTop: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src="https://www.glofox.com/wp-content/uploads/2023/06/Glofox-logo.svg?07.07.2023"
          alt="Logo"
          width={140}
        />
        <FormGroup>
          <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} />} />
        </FormGroup>
      </Box>
      <Stack gap={3} direction="column">
        <AvatarContainer />
        <Menu />
      </Stack>
    </Box>
  );
};
