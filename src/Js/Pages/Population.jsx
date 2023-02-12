import { Box } from "@mui/material";
import React from "react";
import BarGraph from "../Components/Charts/BarGraph";
import Title from "../Components/Common/Title/Title";

const Population = () => {
  return (
    <Box>
      <Title Title={"Countries Population wise Data"} />
      <BarGraph />
    </Box>
  );
};

export default Population;
