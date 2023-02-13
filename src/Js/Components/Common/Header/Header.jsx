import React, { useState } from "react";
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
import {
  SEARCHCOUNRTYAPI,
  SEARCHPAGE,
} from "../../../../Utils/Constants/api_constants";
// import { useNavigate } from "react-router-dom";

export default function Header() {
  // const navigate = useNavigate();
  const [searchCounty, setsearchCounty] = useState("");

  const onInputSearch = (e) => {
    setsearchCounty(e.target.value);
  };
  const [CountyData, setCountyData] = useState();

  const getContryData = async (name) => {
    try {
      const response = await baseApi.get(SEARCHCOUNRTYAPI(name));
      let data = response?.data[0];
      setCountyData(data);
    } catch (err) {
      console.error(err.message);
    }
  };

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
            backgroundColor: "#dfdfdf",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h4"
              color="black"
              style={{ fontWeight: "700", fontFamily: "serif" }}
            >
              Countries of the World
            </Typography>
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
                  // navigate(SEARCHPAGE);
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
