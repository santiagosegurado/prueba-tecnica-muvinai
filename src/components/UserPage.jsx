import { Box } from "@mui/material";
import { UserPageHeader } from "./UserPageHeader";
import { UserPageBotton } from "./UserPageBotton";
import { UserPageContent } from "./UserPageContent";

export const UserPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box sx={{ display:'flex', flexDirection: 'column', gap: 3}}>
        <UserPageHeader />
        <UserPageContent />
      </Box>

      <UserPageBotton />
    </Box>
  );
};
