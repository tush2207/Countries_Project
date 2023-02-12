import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { grey } from "@mui/material/colors";
import Header from "../Common/Header/Header";
import LeftSideDrawer from "../Common/Drawer/LeftSideDrawer";
import { CssBaseline, Grid } from "@mui/material";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <LeftSideDrawer />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: 7,
          minHeight: "100vh",
          backgroundColor: grey[100],
        }}
      >
        <Header />
        <Grid container item>
          <Grid md={2} item></Grid>
          <Grid md={9.8} item>
            <Box mt={11} mb={2} minHeight="100vh">
              <Outlet />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Layout;
