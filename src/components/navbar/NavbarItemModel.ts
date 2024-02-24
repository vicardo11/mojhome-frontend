import { IconType } from "react-icons";
import { Placement } from "../../types/Placemenet";

export interface NavbarItemModel {
  id: number;
  title: string;
  path: string;
  icon: IconType;
  cName: string;
  placement: Placement;
}
