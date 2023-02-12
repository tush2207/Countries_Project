import React, { useContext, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import CountrtiesDetails from "../Hooks/Context/Context";

const PieChart = () => {
  const data = useContext(CountrtiesDetails);
  const [CountryName, setCountryName] = useState([]);
  const [Area, setArea] = useState([]);
  const filterNamePopulation = () => {
    let filterName = data?.map((output) => output.Name);
    setCountryName(filterName);
    let filterArea = data?.map((output) => output.area);
    setArea(filterArea);
  };

  useEffect(() => {
    filterNamePopulation();
  }, [data]);

  const series = Area;

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
      formatter: function (val) {
        return val + "%";
      },
    },
    labels: CountryName,

    title: {
      text: "World population by Area size",
      align: "center",
      floating: true,
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        heigh={1500}
      />
    </div>
  );
};
export default PieChart;
