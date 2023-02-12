import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Directions, SearchRounded } from "@mui/icons-material";
import baseApi from "../../../Services/baseApi";
import { SEARCHCOUNRTYAPI } from "../../../../Utils/Constants/api_constants";

export default function Header() {
  const [searchCounty, setsearchCounty] = useState("");
  const [searchCountyData, setsearchCountyData] = useState([]);

  const onInputSearch = (e) => {
    setsearchCounty(e.target.value);
  };

  const getContryData = async (value) => {
    try {
      const response = await baseApi.get(SEARCHCOUNRTYAPI(value));
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
      setsearchCountyData(filterResponse);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getContryData();
  }, []);
  return (
    <>
      <Box
        sx={{
          height: 1,
          "& .simplebar-content": {
            height: 1,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "grey",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4">Countries of the World</Typography>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search County"
                inputProps={{ "aria-label": "search County" }}
                onChange={(e) => onInputSearch(e)}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={() => {
                  getContryData(searchCounty);
                }}
              >
                <SearchRounded />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <Directions />
              </IconButton>
            </Paper>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
