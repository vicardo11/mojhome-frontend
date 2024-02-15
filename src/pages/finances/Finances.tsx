import React from "react";
import Page from "../Page";
import DataTable, { TableColumn } from "react-data-table-component";
import finances from "../../mock/finances/finances";

type DataRow = {
  id: number;
  type: string;
  amount: number;
  date: string;
};

const columns: TableColumn<DataRow>[] = [
  {
    name: "Id",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Type",
    selector: (row) => row.type,
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
  },
];

const data = finances;

const Finances = () => {
  return (
    <Page title="Finances">
      <DataTable columns={columns} data={data}></DataTable>
    </Page>
  );
};

export default Finances;
