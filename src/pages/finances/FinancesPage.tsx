import Box from "@mui/material/Box";
import CTable from "../../components/table/CTable";
import { FINANCE_TABLE_MODEL } from "./model/FinanceTableModel";
import EditFinanceModal from "./sections/EditFinanceModal";
import { useEffect, useState } from "react";
import { FinanceRecord } from "./model/FinanceRecord";
import useAxios from "../../hooks/useAxios";

const FinancesPage = () => {
  const [selectedFinanceRecord, setSelectedFinanceRecord] = useState<FinanceRecord>();
  const [isEditFinanceModalOpen, setIsEditFinanceModalOpen] = useState(false);
  const [financeRecords, setFinanceRecords] = useState<FinanceRecord[]>([]);
  const axios = useAxios();

  useEffect(() => {
    axios
      .get("http://localhost:8200/api/secured/finances")
      .then((response) => setFinanceRecords(response.data))
      .catch((err) => {
        // handle error
      });
  }, []);

  function handleRowSelected(id: string) {
    setSelectedFinanceRecord(financeRecords.find((record) => record.id === id));
    setIsEditFinanceModalOpen(true);
  }

  function handleEditFinanceModalClosed() {
    setIsEditFinanceModalOpen(false);
  }

  return (
    <Box>
      <CTable
        title="Finances"
        data={financeRecords}
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
