import React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import Header from "../../components/Header";

const invoices = () => {
  return (
    <div>
      <Box sx={{ height: 700, width: "98%", mx: "auto" }}>
        <Header title="INVOICES" subTitle="List of Invoice Balances" />

        <DataGrid
          checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </div>
  );
};

export default invoices;
