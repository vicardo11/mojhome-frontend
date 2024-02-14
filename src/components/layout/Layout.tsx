import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="layout-wrapper">
      <div className="layout-navigation">
        <Sidebar />
      </div>
      <div className="layout-content">{props.children}</div>
    </div>
  );
};

export default Layout;
