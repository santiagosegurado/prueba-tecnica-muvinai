import { Avatar, Box } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { CustomTitle } from "./CustomTitle";

export const AvatarContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
        cursor: "pointer",
        padding: "20px",
      }}
    >
      <Avatar
        alt="User Img"
        src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif"
        sx={{ width: 56, height: 56 }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CustomTitle fontSize={18} fontWeight={500} title={"Juan Perez"} />
        <CustomTitle
          fontSize={14}
          fontWeight={400}
          title={"Gerente"}
          color={"button"}
          opacity={0.6}
        />
      </Box>
      <KeyboardArrowDown />
    </Box>
  );
};
