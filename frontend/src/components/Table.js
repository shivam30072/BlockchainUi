import { Box } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../app.css";
import { columns } from "../constants/Options";

const Table = ({ tableData }) => {
  return (
    <Box sx={{ height: "100%", width: "95%" }} pl={2.5} mt={2}>
      <DataGrid
        sx={{
          color: "white",
          marginBottom: 2,
          bgcolor: "#2e3241",
          fontSize: 25,
          fontWeight: "bold",
          border: "none",
          "& .MuiDataGrid-footerCell": {
            color: "white",
          },
        }}
        rows={tableData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableColumnFilter
        disableColumnMenu
        autoHeight={true}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Table;
