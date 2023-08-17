import { Box } from "@mui/material";
import { CustomInput } from "./CustomInput";

export const UserPageInput = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <CustomInput
          value={"Santiago Segurado"}
          placeholder={"Nombre Completo"}
          type={"text"}
        />

        <CustomInput value={40910934} placeholder={"DNI"} type={"number"} />
        <CustomInput value={1127201927} placeholder={"Telefono"} type={"tel"} />
        <CustomInput
          value={"santisegurado1@gmail.com"}
          placeholder={"Email"}
          type={"email"}
        />
        <CustomInput
          value={"1998-01-22"}
          placeholder={"Nacimiento"}
          type={"date"}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <CustomInput
          value={"Plan Simple"}
          placeholder={"Plan activo"}
          type={"text"}
        />
        <CustomInput value={"Activo"} placeholder={"Estado"} type={"text"} />
        <CustomInput value={"2o045030d094f"} placeholder={"ID"} type={"text"} />
        <CustomInput
          value={"2023-09-07"}
          placeholder={"Fecha de vigencia actual"}
          type={"date"}
        />
        <CustomInput
          value={"2023-10-05"}
          placeholder={"Fecha de vigencia actual"}
          type={"date"}
        />
      </Box>
    </Box>
  );
};
