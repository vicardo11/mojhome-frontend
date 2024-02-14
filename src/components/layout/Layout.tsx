import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.scss";

const Layout = (props: Props) => {
  return (
    <div className="layout-wrapper">
      <div className="layout-navigation">
        <Sidebar />
      </div>
      <div className="layout-content">{props.children}</div>
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default Layout;
