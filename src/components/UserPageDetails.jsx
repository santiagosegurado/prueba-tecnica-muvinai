import { Box, Input, Typography } from "@mui/material";
import { UserPageInput } from "./UserPageInput";

export const UserPageDetails = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
      <Box
        width={254}
        height={325}
        sx={{
          filter: "drop-shadow(0px 5px 25px rgba(47, 128, 237, 0.30))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          "&:hover #target": {
            bottom: 20,
          },
        }}
      >
        <img
          src="https://media.licdn.com/dms/image/D4D03AQE5mpQOC0aHWg/profile-displayphoto-shrink_400_400/0/1678982884861?e=1697673600&v=beta&t=unFSIQpKHEb7qgFuIqsR5igtixXliUutlfaAwa4FVC8"
          alt="Profile Photo"
          width="100%"
          height="100%"
          style={{ borderRadius: 10, objectFit: "cover" }}
        />
        <Box
          sx={{
            display: "flex",
            background: "#eeebeb",
            padding: 2,
            borderRadius: 170,
            alignItems: "center",
            justifyContent: "center",
            width: 240,
            cursor: "pointer",
            position: "absolute",
            bottom: -60,
            transition: "all 0.3s ease",
          }}
          id="target"
        >
          <label htmlFor="input">
            <Typography sx={{ fontFamily: "inherit", cursor: "pointer" }}>
              Cambiar foto
            </Typography>
          </label>
          <Input id="input" type="file" sx={{ display: "none" }}></Input>
        </Box>
      </Box>
      <UserPageInput />
    </Box>
  );
};
