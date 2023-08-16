import { Box, Input, Typography } from "@mui/material";

export const UserPageInput = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 12,
              opacity: 0.5,
              fontWeight: 500,
            }}
          >
            Nombre Completo
          </Typography>
          <Input
            value={"Santiago Segurado"}
            sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 12,
              opacity: 0.5,
              fontWeight: 500,
            }}
          >
            DNI
          </Typography>
          <Input
            value={40910934}
            sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
            type="number"
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 12,
              opacity: 0.5,
              fontWeight: 500,
            }}
          >
            Telefono
          </Typography>
          <Input
            value={1127201927}
            sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
            type="tel"
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 12,
              opacity: 0.5,
              fontWeight: 500,
            }}
          >
            Email
          </Typography>
          <Input
            value={"santisegurado1@gmail.com"}
            sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
            type="email"
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 12,
              opacity: 0.5,
              fontWeight: 500,
            }}
          >
            Nacimiento
          </Typography>
          <Input
            value={"1998-01-22"}
            sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
            type="date"
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 12,
              opacity: 0.5,
              fontWeight: 500,
            }}
          >
            Plan activo
          </Typography>
          <Input
            value={"Plan por mes"}
            sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 12,
              opacity: 0.5,
              fontWeight: 500,
            }}
          >
            Estado
          </Typography>
          <Input
            value={"Activo"}
            sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 12,
              opacity: 0.5,
              fontWeight: 500,
            }}
          >
            ID
          </Typography>
          <Input
            value={"2o045030d094f"}
            sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 12,
              opacity: 0.5,
              fontWeight: 500,
            }}
          >
            Fecha de vigencia actual
          </Typography>
          <Input
            value={"2023-09-07"}
            sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
            type="date"
            disabled
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: 12,
              opacity: 0.5,
              fontWeight: 500,
            }}
          >
            Fecha de vigencia actual
          </Typography>
          <Input
            value={"2023-10-05"}
            sx={{ fontFamily: "inherit", fontSize: 18, fontWeight: 500 }}
            type="date"
            disabled
          />
        </Box>
      </Box>
    </Box>
  );
};
