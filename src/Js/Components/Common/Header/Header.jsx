import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [searchCounty, setsearchCounty] = useState("");

  const onInputSearch = (e) => {
    setsearchCounty(e.target.value);
  };

  const onSearchCountry = () => {
    navigate(`/CountryDetails/${searchCounty}`);
    setsearchCounty("");
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
                value={searchCounty}
                onChange={(e) => onInputSearch(e)}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={onSearchCountry}
              >
                <SearchRounded />
              </IconButton>
            </Paper>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
