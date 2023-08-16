import { Box } from "@mui/material";

export const UserPageDetails = () => {
  return (
    <Box>
      <Box
        width={254}
        height={325}
        sx={{
          filter: "drop-shadow(0px 5px 25px rgba(47, 128, 237, 0.20))",
        }}
      >
        <img
          src="https://media.licdn.com/dms/image/D4D03AQE5mpQOC0aHWg/profile-displayphoto-shrink_400_400/0/1678982884861?e=1697673600&v=beta&t=unFSIQpKHEb7qgFuIqsR5igtixXliUutlfaAwa4FVC8"
          alt="Profile Photo"
          width="100%"
          style={{ borderRadius: 10 }}
        />
      </Box>
    </Box>
  );
};
