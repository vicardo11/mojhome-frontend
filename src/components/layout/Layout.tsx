import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.scss";
import { Container } from "@mui/material";

const Layout = (props: Props) => {
  return (
    <Container>
      <Sidebar />
      <div className="layout-content">{props.children}</div>
    </Container>
  );
};

interface Props {
  children: React.ReactNode;
}

export default Layout;
