import React from "react";
import Page from "../Page";
import EnhancedTable from "./table/FinancesTable";

const Finances = () => {
  return (
    <Page title="Finances">
      <EnhancedTable />
    </Page>
  );
};

export default Finances;
