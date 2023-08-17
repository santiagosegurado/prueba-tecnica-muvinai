import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    col1: "22-01-2023",
    col2: "Juan Perez",
    col3: "Modifico la fecha de caducidad del apto medico de 22-12-2022 a 22-01-2023",
  },
  {
    id: 2,
    col1: "28-01-2023",
    col2: "Veronica Castro",
    col3: "Se modifico la fecha de nacimiento de 01-01-2023 a 22-01-2023",
  },
  {
    id: 3,
    col1: "02-02-2023",
    col2: "Veronica Castro",
    col3: "Se agrego un nuevo apto fisico",
  },
];

const columns = [
  { field: "col1", headerName: "Fecha", width: 150 },
  { field: "col2", headerName: "Operador", width: 150 },
  { field: "col3", headerName: "Modificacion", width: 750 },
];

export function TrackEditionUserPage() {
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
