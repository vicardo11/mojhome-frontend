import "./Layout.scss";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import NavBar, { DRAWER_WIDTH } from "../navbar/NavBar";

const Layout = (props: Props) => {
  return (
    <>
      <Box sx={{ display: { sm: "flex", xs: "block" } }}>
        <CssBaseline />
        <NavBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          }}
        >
          <Toolbar />
          <Box sx={{ mx: { xl: 15, lg: 12, md: 10, sm: 0, xs: 0 } }}>
            {props.children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

interface Props {
  children: React.ReactNode;
}

export default Layout;
