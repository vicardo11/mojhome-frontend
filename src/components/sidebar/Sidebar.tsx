import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu-items">
        {SidebarData.map((item, index) => {
          const Icon = item.icon;

          return (
            <li key={index} className={item.cName}>
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
