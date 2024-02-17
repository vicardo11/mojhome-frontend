import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavBarData } from "./NavBarData";
import { LogoIcon } from "../logoIcon/LogoIcon";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export const DRAWER_WIDTH = 240;

export default function ResponsiveDrawer() {
  const [selectedItem, setSelectedItem] = useState<number>();
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);

  const handleItemClick = (id: number) => {
    setSelectedItem(id);
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const drawerItems = (
    <div>
      <Box className="brand">
        <LogoIcon />
      </Box>
      <Divider />
      <List>
        {NavBarData.map((item) => {
          const ItemIcon = item.icon;
          return (
            <ListItem
              component={Link}
              to={item.path}
              key={item.id}
              disablePadding
              onClick={() => handleItemClick(item.id)}
              className={
                "navbar-list-item " +
                (selectedItem === item.id ? "selected-item" : "")
              }
            >
              <ListItemButton disableTouchRipple sx={{ pl: 2 }}>
                <ListItemIcon>
                  <ItemIcon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  function TopBar() {
    return (
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <>
      <TopBar />
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileDrawerOpen}
          onClose={handleItemClick}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawerItems}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
            },
          }}
          open
        >
          {drawerItems}
        </Drawer>
      </Box>
    </>
  );
}
