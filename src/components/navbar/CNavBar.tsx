import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CLogoIcon } from "../logoIcon/CLogoIcon";
import "./CNavBar.scss";
import { NavBarData } from "./NavBarData";

export const DRAWER_WIDTH = 240;

function CNavBar() {
  const [selectedItem, setSelectedItem] = useState<number>();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleItemClick = (id: number) => {
    setSelectedItem(id);
    // setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const drawerItems = (
    <div>
      <Box className="brand">
        <CLogoIcon />
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
          onClick={handleDrawerToggle}
          onClose={handleDrawerToggle}
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
              boxSizing: "border-box",
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

export default CNavBar;
