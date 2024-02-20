import { TabHeadCellModel } from "../../../components/table/TabHeadCellModel";

export const FINANCE_TABLE_MODEL: TabHeadCellModel[] = [
  {
    id: 1,
    numeric: false,
    disablePadding: false,
    label: "name",
  },
  {
    id: 2,
    numeric: false,
    disablePadding: false,
    label: "type",
  },
  {
    id: 3,
    numeric: false,
    disablePadding: false,
    label: "date",
  },
  {
    id: 4,
    numeric: true,
    disablePadding: false,
    label: "amount",
    align: "right",
  },
];
