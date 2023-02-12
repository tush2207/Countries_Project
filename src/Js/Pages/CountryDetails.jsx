import React from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { name } = useParams();
  return <div>{name}</div>;
};

export default CountryDetails;
