import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { CustomInput } from "./CustomInput";
import { CustomButton } from "./CustomButton";

const rows = [
  { id: 1, col1: "22-02-2023", col2: "OSDE", col3: '10%' },
  { id: 2, col1: "22-03-2023", col2: "SWISS", col3: '11%' },
  { id: 3, col1: "22-05-2023", col2: "ACA", col3: '5%' },
];

const columns = [
  { field: "col1", headerName: "Fecha", width: 150 },
  { field: "col2", headerName: "Codigo", width: 150 },
  { field: "col3", headerName: "Descuento", width: 150 },
];

export function CouponList() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <DataGrid rows={rows} columns={columns} />
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <CustomInput placeholder={"Codigo de cupon"} type={"text"} />
        <CustomButton
          color={'button'}
          fontSize={16}
          padding={"10px 20px"}
          text={"Aplicar codigo"}
        />
      </Box>
    </Box>
  );
}
