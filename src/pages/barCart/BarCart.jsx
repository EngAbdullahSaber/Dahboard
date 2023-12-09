import React from "react";
import Bar from "./Bar";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const BarCart = () => {
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </Box>
  );
};

export default BarCart;
