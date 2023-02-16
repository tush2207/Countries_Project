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
  const Population = data
    ?.map((output) => output.population)
    .reduce((partialSum, a) => partialSum + a, 0);
  const Area = data
    ?.map((output) => output.area)
    .reduce((partialSum, a) => partialSum + a, 0);

  const componentroutes = [
    {
      path: DATATABLE,
      name: "Countries",
      total: TotalCounties,
    },
    {
      path: POPULATION,
      name: "Population",
      total: Population,
    },
    {
      path: AREA,
      name: "Area",
      total: Area,
    },
  ];

  return (
    <div>
      <Title Title={"Hi, Mx. X"} />
      <Grid container={5}>
        <Grid item md={12} display="flex">
          {componentroutes.map((output) => {
            return (
              <Grid item xs={12} sm={6} md={4} m={2}>
                <WidgetSummary
                  title={output.name}
                  total={Math.floor(output.total)}
                  onClick={() => navigate(output.path)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashbaord;
