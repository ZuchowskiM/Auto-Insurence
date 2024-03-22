import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { ICar } from "../../types/global.typing";
import "./CarGrid.scss";

const column: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "brand", headerName: "Brand", width: 100 },
  { field: "model", headerName: "Model", width: 100 },
  { field: "ownerName", headerName: "Owner", width: 100 },
  { field: "productionYear", headerName: "Production year", width: 150 },
  {
    field: "createdAt",
    headerName: "Creation Time",
    width: 200,
    renderCell: (params) => moment(params.row.createdAt).format("YYYY-MM-DD"),
  },
];

interface ICarGridProps {
  data: ICar[];
}

const CarGrid = ({ data }: ICarGridProps) => {
  return (
    <Box sx={{ width: "100%", height: 450 }} className="car-grid">
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.id}
        rowHeight={50}
      />
    </Box>
  );
};

export default CarGrid;
