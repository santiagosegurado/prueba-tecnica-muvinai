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
      <UserPageHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          overflow: "scroll",
        }}
      >
        <UserPageContent />
      </Box>

      <UserPageBotton />
    </Box>
  );
};
