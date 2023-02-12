import { Box } from "@mui/material";
import React from "react";
import PieChart from "../Components/Charts/PieChart";
import Title from "../Components/Common/Title/Title";

const Area = () => {
  return (
    <Box>
      <Title Title={"Countries Area wise Data"} />
      <PieChart />;
    </Box>
  );
};

export default Area;
