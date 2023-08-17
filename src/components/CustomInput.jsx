import { Box, Input, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const CustomInput = ({ placeholder, value, type }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "inherit",
          fontSize: 12,
          opacity: 0.5,
          fontWeight: 500,
        }}
      >
        {placeholder}
      </Typography>
      <Input
        value={value}
        type={type}
        sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
      />
    </Box>
  );
};
