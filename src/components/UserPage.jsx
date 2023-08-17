import { Box } from "@mui/material";
import { UserPageHeader } from "./UserPageHeader";
import { UserPageBotton } from "./UserPageBotton";
import { UserPageContent } from "./UserPageContent";

export const UserPage = () => {
  const containerLayout = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  };

  const userContentContainer = {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    overflow: "scroll",
  };

  return (
    <Box sx={containerLayout}>
      <UserPageHeader />
      <Box sx={userContentContainer}>
        <UserPageContent />
      </Box>

      <UserPageBotton />
    </Box>
  );
};
