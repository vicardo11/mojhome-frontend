import { TabHeadCellModel } from "../../../components/table/TabHeadCellModel";

let a = 0;

export const FINANCE_TABLE_MODEL: TabHeadCellModel[] = [
  {
    id: a++,
    numeric: false,
    disablePadding: false,
    label: "name",
    field: "name",
  },
  {
    id: a++,
    numeric: false,
    disablePadding: false,
    label: "category",
    field: "categoryName",
  },
  {
    id: a++,
    numeric: false,
    disablePadding: false,
    label: "type",
    field: "type",
  },
  {
    id: a++,
    numeric: false,
    disablePadding: false,
    label: "date",
    field: "date",
  },
  {
    id: a++,
    numeric: true,
    disablePadding: false,
    label: "amount",
    field: "amount",
    align: "right",
  },
];
