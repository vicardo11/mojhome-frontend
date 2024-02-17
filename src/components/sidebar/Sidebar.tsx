import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import { LogoIcon } from "../logoIcon/LogoIcon";
import MenuIcon from "@mui/icons-material/Menu";
import "./Sidebar.scss";
import Link from "@mui/material/Link";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const list = () => (
    <Box sx={{ width: { xs: 300, sm: 250 } }} role="presentation">
      <List>
        {SidebarData.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.title}
              component={Link}
              href={item.path}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <Button sx={{ display: { sm: "none" } }} onClick={toggleDrawer}>
        <MenuIcon />
      </Button>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? isSidebarOpen : true}
        onClose={toggleDrawer}
      >
        <div className="logo">
          <LogoIcon />
        </div>
        <Divider />
        {list()}
      </Drawer>
    </div>
  );
}
