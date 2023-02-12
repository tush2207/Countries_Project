import { Typography } from "@mui/material";
import React, { useContext } from "react";
import Title from "../Components/Common/Title/Title";
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

  console.log("TOtalCounties", TotalCounties);

  return (
    <div>
      <Title Title={"Dashboard"} />
      <Typography variant="h6">Countries :{TotalCounties}</Typography>
      <Typography variant="h6">Area :{TotalArea}</Typography>
      <Typography variant="h6">Population:{TotalPopulation}</Typography>
      {}
    </div>
  );
};

export default Dashbaord;
