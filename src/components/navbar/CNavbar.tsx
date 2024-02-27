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
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CLogoIcon } from "../logoIcon/CLogoIcon";
import "./CNavbar.scss";
import { NavbarItemModel } from "./NavbarItemModel";
import { Placement } from "../../types/Placement";

export const DRAWER_WIDTH = 240;

function CNavbar(props: Props) {
  const [selectedItem, setSelectedItem] = useState<number>();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const item = props.navbarItems.find((el) => el.path === location.pathname);
    if (item) {
      setSelectedItem(item.id);
    }
  }, [location.pathname, props.navbarItems]);

  const handleItemClick = (id: number) => {
    setSelectedItem(id);
  };

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  function getListItem(item: NavbarItemModel) {
    const ItemIcon = item.icon;
    // const path = window.location.pathname;
    return (
      <ListItem
        component={Link}
        to={item.path}
        key={item.id}
        disablePadding
        onClick={() => handleItemClick(item.id)}
        className={"navbar-list-item " + (selectedItem === item.id ? "selected-item" : "")}
      >
        <ListItemButton disableTouchRipple sx={{ pl: 2 }}>
          <ListItemIcon>
            <ItemIcon />
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    );
  }

  const drawerItems = (
    <>
      <Box className="brand">
        <CLogoIcon />
      </Box>
      <Divider />
      <List
        sx={{
          height: "100%",
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {props.navbarItems
            .filter((el) => el.placement === Placement.TOP)
            .map((item) => {
              return getListItem(item);
            })}
        </Box>
        <Box sx={{ pb: 2 }}>
          {props.navbarItems
            .filter((el) => el.placement === Placement.BOTTOM)
            .map((item) => {
              return getListItem(item);
            })}
        </Box>
      </List>
    </>
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

interface Props {
  navbarItems: NavbarItemModel[];
}

export default CNavbar;
