import { IconType } from "react-icons";

export interface NavbarItemModel {
  id: number;
  title: string;
  path: string;
  icon: IconType;
  cName: string;
}
