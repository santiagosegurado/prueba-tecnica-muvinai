import { Box, Input, Typography } from "@mui/material";
import { CustomButton } from "./CustomButton";
import { CustomInput } from "./CustomInput";

export const UserPageFiles = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box
        sx={{
          display: "flex",
          width: 300,
          height: 250,
          filter: "drop-shadow(0px 5px 25px rgba(47, 128, 237, 0.20))",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          "&:hover #target": {
            bottom: 20,
          },
        }}
      >
        <img
          src="https://www.runningcorrer.com.ar/wprunning/wp-content/uploads/2016/03/Certificado-Aptitud-Fisica.jpg"
          alt="Apto medico"
          width="100%"
          height="100%"
          style={{ borderRadius: 10 }}
        />
        <Box
          sx={{
            display: "flex",
            background: "#eeebeb",
            padding: 2,
            borderRadius: 170,
            alignItems: "center",
            justifyContent: "center",
            width: 240,
            cursor: "pointer",
            position: "absolute",
            bottom: -60,
            transition: "all 0.3s ease",
          }}
          id="target"
        >
          <label htmlFor="input">
            <Typography sx={{ fontFamily: "inherit", cursor: "pointer" }}>
              Subir Archivo
            </Typography>
          </label>
          <Input id="input" type="file" sx={{ display: "none" }}></Input>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CustomInput type={"date"} placeholder={"fecha de caducidad"} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <CustomButton
            color={"error"}
            text={"Rechazar"}
            fontSize={15}
            padding={"10px 30px"}
          />
          <CustomButton text={"Aprobar"} fontSize={15} padding={"10px 30px"} />
        </Box>
      </Box>
    </Box>
  );
};
