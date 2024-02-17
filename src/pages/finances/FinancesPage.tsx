import React from "react";
import EnhancedTable from "./table/FinancesTable";
import Layout from "../../components/layout/Layout";
import Box from "@mui/material/Box";

const FinancesPage = () => {
  return (
    <Layout>
      <Box sx={{ mx: { md: 5, sm: 4, xs: 2 } }}>
        FINANCES
        <EnhancedTable />
        <EnhancedTable />
        <EnhancedTable />
        <EnhancedTable />
      </Box>
    </Layout>
  );
};

export default FinancesPage;
