import Box from "@mui/material/Box";
import CTable from "../../components/table/CTable";
import { DATA } from "./mock/finances";
import { FINANCE_TABLE_MODEL } from "./model/FinanceTableModel";
import EditFinanceModal from "./sections/EditFinanceModal";
import { useState } from "react";
import { FinanceRecord } from "./model/FinanceRecord";

const FinancesPage = () => {
  const [selectedFinanceRecord, setSelectedFinanceRecord] = useState<FinanceRecord>();
  const [isEditFinanceModalOpen, setIsEditFinanceModalOpen] = useState(false);

  function handleRowSelected(id: number) {
    setSelectedFinanceRecord(DATA.find((record) => record.id === id));
    setIsEditFinanceModalOpen(true);
  }

  function handleEditFinanceModalClosed() {
    setIsEditFinanceModalOpen(false);
  }

  return (
    <Box>
      <CTable
        title="Finances"
        data={DATA}
        headCells={FINANCE_TABLE_MODEL}
        onRowSelected={handleRowSelected}
      />
      <EditFinanceModal
        selectedFinanceRecord={selectedFinanceRecord}
        open={isEditFinanceModalOpen}
        onClose={handleEditFinanceModalClosed}
      />
    </Box>
  );
};

export default FinancesPage;
