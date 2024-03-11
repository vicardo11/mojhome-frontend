export interface TabHeadCellModel {
  id: number;
  disablePadding: boolean;
  field: string; // The name of the fields from model
  label: string; // Must be lowercase (for sorting)
  numeric: boolean;
  align?: "center" | "inherit" | "justify" | "left" | "right";
}
