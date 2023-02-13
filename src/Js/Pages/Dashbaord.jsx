import { Grid } from "@mui/material";
import React, { useContext } from "react";
import Title from "../Components/Common/Title/Title";
import WidgetSummary from "../Components/Common/WidgetSummaryCards/WidgetSummary";
import CountrtiesDetails from "../Components/Hooks/Context/Context";

const Dashbaord = () => {
  const data = useContext(CountrtiesDetails);
  const TotalCounties = data?.length;
  const Population = data?.map((output) => output.population);
  const TotalPopulation = Population.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const Area = data?.map((output) => output.area);
  const TotalArea = Area.reduce((partialSum, a) => partialSum + a, 0);
  return (
    <div>
      <Title Title={"Hi, Mx. X"} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <WidgetSummary title="Countries" total={TotalCounties} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <WidgetSummary title="Population" total={TotalPopulation} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <WidgetSummary title="Area" total={Math.floor(TotalArea)} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashbaord;
