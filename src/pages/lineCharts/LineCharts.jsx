import React from "react";
import Line from "./Line";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const LineCharts = () => {
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <Line />
    </Box>
  );
};

export default LineCharts;
