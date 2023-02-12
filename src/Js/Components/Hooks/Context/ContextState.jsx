import { useEffect, useState } from "react";
import CountrtiesDetails from "./Context";
import baseApI from "../../../Services/baseApi";
import { ALLCOUNTRIESAPI } from "../../../../Utils/Constants/api_constants";

const ContextState = (props) => {
  const [allCountriesData, setallCountriesData] = useState([]);

  const getContriesData = async (search) => {
    try {
      const response = await baseApI.get(ALLCOUNTRIESAPI);
      let filterResponse = response?.data?.map((output) => {
        return {
          Name: output?.name?.official,
          CommonName: output?.name?.common,
          Region: output?.region,
          Subregion: output?.subregion,
          population: output?.population,
          area: output?.area,
          languages: output?.languages,
          continents: output?.continents,
          status: output?.status,
          timezones: output?.timezones,
          latlng: output?.latlng,
          flags_imgUrl: output?.flags?.png,
          flags_altUrl: output?.flags?.alt,
          postalCode: output?.postalCode,
          maps: output?.maps,
          currencies: output?.currencies,
          fifa: output?.fifa,
          nativeName: output?.nativeName,
        };
      });
      setallCountriesData(filterResponse);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getContriesData();
  }, []);

  return (
    <CountrtiesDetails.Provider value={allCountriesData}>
      {props.children}
    </CountrtiesDetails.Provider>
  );
};

export default ContextState;
