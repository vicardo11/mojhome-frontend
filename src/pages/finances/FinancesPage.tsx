import React from "react";
import EnhancedTable from "./table/FinancesTable";
import Box from "@mui/material/Box";

const FinancesPage = () => {
  return (
    <Box>
      FINANCES
      <EnhancedTable />
      <EnhancedTable />
      <EnhancedTable />
      <EnhancedTable />
    </Box>
  );
};

export default FinancesPage;
