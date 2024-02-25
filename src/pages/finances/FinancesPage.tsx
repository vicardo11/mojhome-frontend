import Box from "@mui/material/Box";
import CTable from "../../components/table/CTable";
import { FINANCE_TABLE_MODEL } from "./model/FinanceTableModel";
import EditFinanceModal from "./sections/EditFinanceModal";
import { useEffect, useState } from "react";
import { FinanceRecord } from "./model/FinanceRecord";
import { useAuth } from "react-oidc-context";

const FinancesPage = () => {
  const [selectedFinanceRecord, setSelectedFinanceRecord] = useState<FinanceRecord>();
  const [isEditFinanceModalOpen, setIsEditFinanceModalOpen] = useState(false);
  const [financeRecords, setFinanceRecords] = useState<FinanceRecord[]>([]);
  const auth = useAuth();

  useEffect(() => {
    fetch("http://localhost:8200/api/secured/finances", {
      headers: {
        Authorization: "Bearer " + auth.user?.access_token,
      },
    })
      .then((response) => response.json())
      .then((data) => setFinanceRecords(data))
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
