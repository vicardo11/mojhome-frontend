import "./CLayout.scss";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import CNavbar, { DRAWER_WIDTH } from "../navbar/CNavbar";
import { NavbarItemModel } from "../navbar/NavbarItemModel";

const CLayout = (props: Props) => {
  return (
    <>
      <Box sx={{ display: { sm: "flex", xs: "block" } }}>
        <CssBaseline />
        <CNavbar navbarItems={props.navbarItems} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          }}
        >
          <Toolbar />
          <Box sx={{ mx: { xl: 15, lg: 12, md: 10, sm: 0, xs: 0 } }}>{props.children}</Box>
        </Box>
      </Box>
    </>
  );
};

interface Props {
  navbarItems: NavbarItemModel[];
  children: React.ReactNode;
}

export default CLayout;
