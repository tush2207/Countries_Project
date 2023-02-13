import { EastOutlined } from "@mui/icons-material";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { COUNTRYDETAIL } from "../../Utils/Constants/api_constants";

const SearchPage = ({ data }) => {
  const navigate = useNavigate();
  useEffect(() => {}, [data]);

  return (
    <>
      {data !== undefined || data?.lenght > 0 ? (
        <Grid container>
          <Grid md={3}></Grid>
          <Grid md={8}>
            <Card
              sx={{ width: "50%", cursor: "pointer", marginTop: "85px" }}
              onClick={() =>
                data?.name?.common !== "" || data?.name?.common !== undefined
                  ? navigate(COUNTRYDETAIL + data?.name?.common)
                  : ""
              }
            >
              <CardContent>
                {data?.name?.common}
                <Stack spacing={1}>
                  <Typography key={data?.name?.common} fontSize={15}>
                    <Typography color="GrayText" component="span" fontSize={14}>
                      {data?.name?.common}:
                    </Typography>{" "}
                  </Typography>
                  <Stack direction="row">
                    <Typography variant="subtitle2" color={teal[700]} mr={1}>
                      View more{" "}
                    </Typography>
                    <EastOutlined fontSize="small" sx={{ color: teal[700] }} />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchPage;
