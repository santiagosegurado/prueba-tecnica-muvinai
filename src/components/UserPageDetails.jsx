import { Box, Input, Typography } from "@mui/material";
import { UserPageInput } from "./UserPageInput";
import { useTheme } from "@emotion/react";
import { useState } from "react";

export const UserPageDetails = () => {
  const theme = useTheme();

  const [localImg, setLocalImg] = useState(null);

  const onSelectedImg = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const fr = new FileReader()
    fr.onload = () => setLocalImg(fr.result)
    fr.readAsDataURL(file)
  };

  const imgProfileContainer = {
    filter: "drop-shadow(0px 5px 25px rgba(47, 128, 237, 0.30))",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    "&:hover #target": {
      bottom: 20,
    },
  };

  const labelContainer = {
    display: "flex",
    background: theme.palette.container.main,
    padding: 2,
    borderRadius: 170,
    alignItems: "center",
    justifyContent: "center",
    width: 240,
    cursor: "pointer",
    position: "absolute",
    bottom: -60,
    transition: "all 0.3s ease",
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
      <Box width={254} height={325} sx={imgProfileContainer}>
        {localImg ? (
          <img
            src={localImg}
            alt="Profile Photo"
            width="100%"
            height="100%"
            style={{ borderRadius: 10, objectFit: "cover" }}
          />
        ) : (
          <img
            src="https://media.licdn.com/dms/image/D4D03AQE5mpQOC0aHWg/profile-displayphoto-shrink_400_400/0/1678982884861?e=1697673600&v=beta&t=unFSIQpKHEb7qgFuIqsR5igtixXliUutlfaAwa4FVC8"
            alt="Profile Photo"
            width="100%"
            height="100%"
            style={{ borderRadius: 10, objectFit: "cover" }}
          />
        )}
        <Box sx={labelContainer} id="target">
          <label htmlFor="input">
            <Typography sx={{ fontFamily: "inherit", cursor: "pointer" }}>
              Cambiar foto
            </Typography>
          </label>
          <Input
            id="input"
            type="file"
            sx={{ display: "none" }}
            onChange={onSelectedImg}
          ></Input>
        </Box>
      </Box>
      <UserPageInput />
    </Box>
  );
};
