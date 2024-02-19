export interface TabHeadCellModel {
  id: number;
  disablePadding: boolean;
  label: string; // Must be lowercase (for sorting)
  numeric: boolean;
  align?: "center" | "inherit" | "justify" | "left" | "right";
}
