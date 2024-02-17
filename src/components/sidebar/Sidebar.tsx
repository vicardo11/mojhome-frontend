import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SidebarData } from "./SidebarData";
import { LogoIcon } from "../logoIcon/LogoIcon";
import { Link } from "@mui/material";

const drawerWidth = 240;

export default function ResponsiveDrawer(props: Props) {
  const handleDrawerClose = () => {
    props.onDrawerClose();
  };

  const drawer = (
    <div>
      <Box sx={{ width: "50%", mx: "auto" }}>
        <LogoIcon />
      </Box>
      <Divider />
      <List>
        {SidebarData.map((item) => {
          const Logo = item.icon;
          return (
            <ListItem
              component={Link}
              href={item.path}
              key={item.id}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  <Logo />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={props.mobileDrawerOpen}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

interface Props {
  mobileDrawerOpen: boolean;
  onDrawerClose: () => void;
}
