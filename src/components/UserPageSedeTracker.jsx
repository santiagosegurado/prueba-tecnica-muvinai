import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    col1: "12-10-2022",
    col2: "Belgrano",
    col3: 10,
  },
  {
    id: 2,
    col1: "25-01-2023",
    col2: "Microcentro",
    col3: 5,
  },
  {
    id: 3,
    col1: "02-02-2023",
    col2: "Pilar",
    col3: 3,
  },
];

const columns = [
  { field: "col1", headerName: "Ultimo acceso", width: 150 },
  { field: "col2", headerName: "Sede", width: 150 },
  { field: "col3", headerName: "Accesos", width: 150 },
];

export function UserPageSedeTracker() {
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
