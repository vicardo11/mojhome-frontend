import React, { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { LogoIcon } from "../logoIcon/LogoIcon";
import { Divider } from "@mui/material";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<number>();

  function handleSelectItem(id: number) {
    setSelectedItem(id);
  }

  return (
    <nav className="nav-menu">
      <div className="brand">
        <LogoIcon />
      </div>
      <Divider />
      <ul className="nav-menu-items">
        {SidebarData.map((item) => {
          const Icon = item.icon;

          return (
            <li
              onClick={() => handleSelectItem(item.id)}
              key={item.id}
              className={`${item.cName} ${selectedItem === item.id ? "selected-item" : ""}`}
            >
              <Link to={item.path}>
                <Icon />
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
