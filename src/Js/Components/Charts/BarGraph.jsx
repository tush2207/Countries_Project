import React, { useContext, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import CountrtiesDetails from "../Hooks/Context/Context";

const BarGraph = () => {
  const data = useContext(CountrtiesDetails);
  const [CountryName, setCountryName] = useState([]);
  const [CountryPopulation, setCountryPopulation] = useState([]);
  const filterNamePopulation = () => {
    let filterName = data?.map((output) => output.CommonName);
    setCountryName(filterName);
    let filterPopulation = data?.map((output) => output.population);
    // filterPopulation.sort(function(a, b){return b-a});
    setCountryPopulation(filterPopulation);

    const sum = filterPopulation.reduce((partialSum, a) => partialSum + a, 0);
    console.log("sum", sum);
  };
  useEffect(() => {
    filterNamePopulation();
    // eslint-disable-next-line
  }, [data]);

  const series = [
    {
      data: CountryPopulation,
    },
  ];
  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: CountryName,
    },
    title: {
      text: "World population by countries",
      align: "center",
      floating: true,
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={5500}
      />
    </div>
  );
};
export default BarGraph;
