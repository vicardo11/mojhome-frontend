import React from "react";
import "./Layout.scss";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "../navbar/NavBar";

const Layout = (props: Props) => {
  return (
    <>
      <Box sx={{ display: { sm: "flex", xs: "block" } }}>
        <CssBaseline />
        <NavBar />
        <Box
          sx={{
            m: 3,
            width: { sm: "100%" },
          }}
        >
          <Toolbar />
          <Box>{props.children}</Box>
        </Box>
      </Box>
    </>
  );
};

interface Props {
  children: React.ReactNode;
}

export default Layout;
