import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import CTable from "../../components/table/CTable";
import useAxios from "../../hooks/useAxios";
import { FinanceRecord } from "./model/FinanceRecord";
import { FINANCE_TABLE_MODEL } from "./model/FinanceTableModel";
import EditFinanceModal from "./sections/EditFinanceModal";
import { AxiosResponse } from "axios";

const FinancesPage = () => {
  const [selectedFinanceRecord, setSelectedFinanceRecord] = useState<FinanceRecord>();
  const [isEditFinanceModalOpen, setIsEditFinanceModalOpen] = useState(false);
  const [financeRecords, setFinanceRecords] = useState<FinanceRecord[]>([]);
  const axios = useAxios();

  function formatResponse(response: AxiosResponse<FinanceRecord>) {
    return response.data.map((record: FinanceRecord) => ({
      ...record,
      amount: record.amount.toFixed(2), // Format amount to 2 decimal places
    }));
  }

  useEffect(() => {
    axios
      .get("http://localhost:8200/api/secured/finances")
      .then((response) => {
        setFinanceRecords(formatResponse(response));
      })
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
