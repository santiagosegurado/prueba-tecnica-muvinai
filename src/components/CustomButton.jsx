/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

export const CustomButton = ({
  color,
  text,
  fontSize,
  padding,
  handleClick,
}) => {
  return (
    <Button
      color={!color ? "primary" : color}
      sx={{
        fontFamily: "inherit",
        textTransform: "initial",
        padding,
        fontSize,
        borderRadius: 50,
      }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
