import { AiFillHome } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBugOutline } from "react-icons/io5";
import { Placement } from "../types/Placement";

export const NAVBAR_DATA = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: AiFillHome,
    cName: "nav-text",
    placement: Placement.TOP,
  },
  {
    id: 2,
    title: "Finances",
    path: "/finances",
    icon: RiMoneyDollarCircleLine,
    cName: "nav-text",
    placement: Placement.TOP,
  },
  {
    id: 3,
    title: "Settings",
    path: "/settings",
    icon: IoSettingsOutline,
    cName: "nav-text",
    placement: Placement.BOTTOM,
  },
  {
    id: 4,
    title: "Report a bug",
    path: "/report-bug",
    icon: IoBugOutline,
    cName: "nav-text",
    placement: Placement.BOTTOM,
  },
];
