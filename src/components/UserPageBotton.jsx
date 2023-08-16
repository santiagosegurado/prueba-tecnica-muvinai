import { Box, Button, IconButton } from "@mui/material";
import { Email, WhatsApp } from "@mui/icons-material/";


export const UserPageBotton = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <IconButton size="large">
            <Email sx={{ fontSize: 30 }}/>
          </IconButton>
          <IconButton size="large" color="primary">
            <WhatsApp sx={{ fontSize: 30 }}/>
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Button
            color="error"
            sx={{
              fontFamily: "inherit",
              textTransform: "initial",
              padding: "10px 40px",
              fontSize: 18,
              borderRadius: 50,
            }}
          >
            Dar baja
          </Button>
          <Button
            sx={{
              fontFamily: "inherit",
              textTransform: "initial",
              padding: "10px 40px",
              fontSize: 18,
              borderRadius: 50,
            }}
          >
            Dar alta
          </Button>
        </Box>
      </Box>
  )
}
