import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  DATATABLE,
  SEARCHCOUNRTYAPI,
} from "../../Utils/Constants/api_constants";
import baseApi from "../Services/baseApi";
import Title from ".././Components/Common/Title/Title";
import {
  KeyboardBackspaceSharp,
  MapOutlined,
  Place,
} from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledCards = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  border: "3px solid #dfdfdf",
}));

const CountryDetails = () => {
  const navigate = useNavigate();
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
  }, [name]);
  return (
    <Box mb={3}>
      <div
        style={{ display: "flex", cursor: "pointer" }}
        onClick={() => navigate(DATATABLE)}
      >
        <KeyboardBackspaceSharp
          style={{
            color: "grey",
            margin: "2px 5px 0px 0px",
          }}
        />
        <Typography style={{ fontSize: "20px", color: "grey" }}>
          Go back
        </Typography>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={5}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: "700" }}>
            {CountyData?.name?.official}
          </Typography>
          <img
            src={CountyData?.flags?.png}
            alt={CountyData?.flags?.alt}
            style={{ width: "100%", height: "75%" }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6} ml={3}>
          <Title Title={"Name"} />
          <StyledCards style={{}}>
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
              {CountyData?.altSpellings.map((alt, index) => {
                return (
                  <Typography variant="h6" key={index}>
                    AltSpellings: {alt}
                  </Typography>
                );
              })}
            </CardContent>
          </StyledCards>
        </Grid>
        <Grid item xs={12} md={6} lg={5} mt={1} mr={3}>
          <Title Title={"Language"} />
          <StyledCards>
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
          </StyledCards>
        </Grid>
        <Grid item xs={12} md={6} lg={6} mt={1}>
          <Title Title={"Geography"} />

          <StyledCards>
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
              {CountyData?.area ? (
                <Typography variant="h6">Area: {CountyData?.area}</Typography>
              ) : (
                ""
              )}
              {CountyData?.latlng ? (
                <Typography variant="h6">
                  Lat/Lng : {CountyData?.latlng[0]} ,{CountyData?.latlng[1]}
                </Typography>
              ) : (
                ""
              )}
              {CountyData?.borders ? (
                <Typography variant="h6">
                  Border : {CountyData?.borders[0]} , {CountyData?.borders[1]}
                  {CountyData?.borders[2]}
                </Typography>
              ) : (
                ""
              )}
              <div style={{ display: "flex" }}>
                <MapOutlined style={{ fontSize: "25px", marginRight: "5px" }} />
                <a
                  href={CountyData?.maps?.googleMaps}
                  target="_blank"
                  rel="noreferrer"
                >
                  {CountyData?.maps?.googleMaps}
                </a>
              </div>

              <div style={{ display: "flex" }}>
                <Place style={{ fontSize: "25px", marginRight: "5px" }} />
                <Typography>
                  <a
                    href={CountyData?.maps?.openStreetMaps}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {CountyData?.maps?.openStreetMaps}
                  </a>
                </Typography>
              </div>
            </CardContent>
          </StyledCards>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CountryDetails;
