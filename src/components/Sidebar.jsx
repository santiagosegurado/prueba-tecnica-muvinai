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
        justifyContent: "space-around",
        paddingRight: "37px",
      }}
    >
      <Stack gap={3} direction="column">
        <AvatarContainer />
        <Menu />
      </Stack>
      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label="Modo Claro"
        />
      </FormGroup>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <img
          src="https://www.glofox.com/wp-content/uploads/2023/06/Glofox-logo.svg?07.07.2023"
          alt="Logo"
          width={140}
        />
      </Box>
    </Box>
  );
};
