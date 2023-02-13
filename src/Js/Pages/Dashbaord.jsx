import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Components/Common/Title/Title";
import WidgetSummary from "../Components/Common/WidgetSummaryCards/WidgetSummary";
import CountrtiesDetails from "../Components/Hooks/Context/Context";
import {
  AREA,
  DATATABLE,
  POPULATION,
} from "../../Utils/Constants/api_constants";
const Dashbaord = () => {
  const data = useContext(CountrtiesDetails);
  const navigate = useNavigate();
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
          <WidgetSummary
            title="Countries"
            total={TotalCounties}
            onClick={() => navigate(DATATABLE)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <WidgetSummary
            title="Population"
            total={TotalPopulation}
            onClick={() => navigate(POPULATION)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <WidgetSummary
            title="Area"
            total={Math.floor(TotalArea)}
            onClick={() => navigate(AREA)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashbaord;
