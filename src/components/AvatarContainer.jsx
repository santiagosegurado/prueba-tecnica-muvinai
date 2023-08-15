import { Avatar, Box, Typography } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

export const AvatarContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "center",
        cursor: "pointer",
        padding: '20px'
      }}
    >
      <Avatar
        alt="User Img"
        src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif"
        sx={{ width: 56, height: 56 }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
        >
          Juan Perez
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: 14,
            color: "#333",
            opacity: 0.6,
          }}
        >
          Generente
        </Typography>
      </Box>
      <KeyboardArrowDown />
    </Box>
  );
};
