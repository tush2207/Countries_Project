import {
  List,
  Toolbar,
  Drawer,
  ListItemButton,
  ListItemIcon,
  Box,
  styled,
  ListItemText,
  Link,
} from "@mui/material";
import React from "react";
import { Adjust, Dashboard, Map, People, TableRows } from "@mui/icons-material";

const drawerWidth = 240;
const Componentroutes = [
  {
    path: "/",
    component: "Dashbaord",
  },
  {
    path: "/DataTable",
    component: "DataTable",
  },
  {
    path: "/Population",
    component: "Population",
  },
  {
    path: "/Area",
    component: "Area",
  },
];
export const StyledNavItem = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const LeftSideDrawer = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
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
                <StyledNavItem>
                  <StyledNavItemIcon
                    sx={{
                      "&.active": {
                        color: "text.primary",
                        bgcolor: "action.selected",
                        fontWeight: "fontWeightBold",
                      },
                    }}
                  >
                    {output.component === "Dashboard" ? (
                      <Dashboard />
                    ) : output.component === "DataTable" ? (
                      <TableRows />
                    ) : output.component === "Population" ? (
                      <People />
                    ) : output.component === "Area" ? (
                      <Adjust />
                    ) : (
                      <Map />
                    )}
                  </StyledNavItemIcon>
                  <ListItemText disableTypography primary={output.component} />
                </StyledNavItem>
              </Link>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default LeftSideDrawer;
