import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SEARCHCOUNRTYAPI } from "../../Utils/Constants/api_constants";
import baseApi from "../Services/baseApi";
import Title from ".././Components/Common/Title/Title";

const CountryDetails = () => {
  const { name } = useParams();
  const [CountyData, setCountyData] = useState();
  const getContryData = async () => {
    try {
      const response = await baseApi.get(SEARCHCOUNRTYAPI(name));
      let data = response?.data[0];
      setCountyData(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getContryData();
  });
  return (
    <Box mb={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {CountyData?.name?.official}
          </Typography>
          <img
            src={CountyData?.flags?.png}
            alt={CountyData?.flags?.alt}
            style={{ width: "100%", height: "75%" }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={5} ml={3}>
          <Title Title={"Name"} />
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">
                Official: {CountyData?.name?.common}
              </Typography>
              <Typography variant="h6">
                Common: {CountyData?.name?.common}
              </Typography>
              {CountyData?.name?.nativeName?.eng?.official ? (
                <Typography variant="h6">
                  Native Official: {CountyData?.name?.nativeName?.eng?.official}
                </Typography>
              ) : (
                ""
              )}
              {CountyData?.name?.nativeName?.eng?.common ? (
                <Typography variant="h6">
                  Native Common: {CountyData?.name?.nativeName?.eng?.common}
                </Typography>
              ) : (
                ""
              )}
              {CountyData?.altSpellings.map((alt) => {
                return (
                  <Typography variant="h6">AltSpellings: {alt}</Typography>
                );
              })}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={5} mt={1}>
          <Title Title={"Language"} />
          <Card variant="outlined">
            <CardContent>
              {CountyData?.languages?.official ? (
                <Typography variant="h6">
                  Native Language : {CountyData?.languages?.official}
                </Typography>
              ) : (
                ""
              )}
              {CountyData?.languages?.eng ? (
                <Typography variant="h6">
                  eng: {CountyData?.languages?.eng}
                </Typography>
              ) : (
                ""
              )}
              {CountyData?.languages?.hin ? (
                <Typography variant="h6">
                  hin: {CountyData?.languages?.hin}
                </Typography>
              ) : (
                ""
              )}
              {CountyData?.languages?.tim ? (
                <Typography variant="h6">
                  tim: {CountyData?.languages?.tim}
                </Typography>
              ) : (
                ""
              )}
              {CountyData?.languages?.ara ? (
                <Typography variant="h6">
                  ara: {CountyData?.languages?.ara}
                </Typography>
              ) : (
                ""
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={5} mt={1}>
          <Title Title={"Geography"} />
          <Card variant="outlined">
            <CardContent>
              {CountyData?.region ? (
                <Typography variant="h6">
                  Region: {CountyData?.region}
                </Typography>
              ) : (
                ""
              )}
              {CountyData?.subregion ? (
                <Typography variant="h6">
                  Subregion: {CountyData?.subregion}
                </Typography>
              ) : (
                ""
              )}
              {CountyData?.capital ? (
                <Typography variant="h6">
                  Capital: {CountyData?.capital[0]}
                </Typography>
              ) : (
                ""
              )}
              {/* <Typography variant="h6">
                Border:
                {CountyData?.borders.map((border) => {
                  return border;
                })}
              </Typography> */}
              {CountyData?.area ? (
                <Typography variant="h6">Area: {CountyData?.area}</Typography>
              ) : (
                ""
              )}
              {CountyData?.latlng ? (
                <Typography variant="h6">
                  Lat/Lng : {CountyData?.latlng[0]} , {CountyData?.latlng[1]}
                </Typography>
              ) : (
                ""
              )}

              {CountyData?.borders ? (
                <Typography variant="h6">
                  Border : {CountyData?.borders[0]} , {CountyData?.borders[1]},
                  {CountyData?.borders[2]}
                </Typography>
              ) : (
                ""
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CountryDetails;
