import { Box, Input } from "@mui/material";
import { CustomTitle } from "./CustomTitle";

// eslint-disable-next-line react/prop-types
export const CustomInput = ({ placeholder, value, type }) => {
  return (
    <Box> 
      <CustomTitle fontSize={12} opacity={0.5} fontWeight={500} title={placeholder}/>
      <Input
        value={value}
        type={type}
        sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
      />
    </Box>
  );
};
