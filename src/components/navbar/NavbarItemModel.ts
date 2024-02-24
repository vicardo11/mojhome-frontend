import { IconType } from "react-icons";
import { Placement } from "../../types/Placement";

export interface NavbarItemModel {
  id: number;
  title: string;
  path: string;
  icon: IconType;
  cName: string;
  placement: Placement;
}
