/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

export const CustomTitle = ({
  title,
  fontSize,
  fontWeight,
  color,
  opacity,
  margin,
}) => {
  return (
    <Typography
      sx={{
        fontFamily: "inherit",
        fontSize,
        color,
        fontWeight,
        opacity,
        margin,
      }}
    >
      {title}
    </Typography>
  );
};
