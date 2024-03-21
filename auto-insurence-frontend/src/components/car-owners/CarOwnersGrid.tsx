import { Box } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import moment from "moment"
import { ICarOwner } from "../../types/global.typing"
import "./CarOwnersGrid.scss"

const column: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 100 },
    { field: "surname", headerName: "Surname", width: 100 },
    {
        field: "createdAt", headerName: "Creation Time", width: 200,
        renderCell: (params) => moment(params.row.createdAt).format("YYYY-MM-DD")
    },
]

interface ICarOwnerGridProps {
    data: ICarOwner[]
}

const CarOwnersGrid = ({ data }: ICarOwnerGridProps) => {
    return (
        <Box sx={{ width: "100%", height: 450 }} className="car-owners-grid">
            <DataGrid
                rows={data}
                columns={column}
                getRowId={(row) => row.id}
                rowHeight={50}
            />
        </Box>
    )
}

export default CarOwnersGrid