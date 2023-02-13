import {
  List,
  Toolbar,
  Drawer,
  ListItemButton,
  ListItemIcon,
  Box,
  ListItemText,
  Link,
} from "@mui/material";
import React from "react";
import {
  Adjust,
  DashboardCustomize,
  Map,
  People,
  TableRows,
} from "@mui/icons-material";
import {
  AREA,
  DATATABLE,
  POPULATION,
} from "../../../../Utils/Constants/api_constants";
import { useLocation } from "react-router-dom";
const drawerWidth = 240;
const Componentroutes = [
  {
    path: "/",
    component: "Dashboard",
  },
  {
    path: DATATABLE,
    component: "DataTable",
  },
  {
    path: POPULATION,
    component: "Population",
  },
  {
    path: AREA,
    component: "Area",
  },
];
const LeftSideDrawer = () => {
  const location = useLocation();
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          // boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box>
        <Box>
          <List>
            {Componentroutes.map((output, index) => (
              <Link href={output.path} underline="none" key={index}>
                {/* <StyledNavItem> */}
                <ListItemButton
                  style={{
                    height: 48,
                    position: "relative",
                    textTransform: "capitalize",
                    backgroundColor:
                      location.pathname === output.path ? "#dfdfdf" : "white",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      "&.active": {
                        color: "text.primary",
                        bgcolor: "action.selected",
                        fontWeight: "fontWeightBold",
                      },
                    }}
                  >
                    {output.component === "Dashboard" ? (
                      <DashboardCustomize />
                    ) : output.component === "DataTable" ? (
                      <TableRows />
                    ) : output.component === "Population" ? (
                      <People />
                    ) : output.component === "Area" ? (
                      <Adjust />
                    ) : (
                      <Map />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={output.component}
                    style={{
                      fontWeight: "700",
                      fontFamily: "serif",
                      color: "black",
                    }}
                  />
                </ListItemButton>
                {/* </StyledNavItem> */}
              </Link>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default LeftSideDrawer;
