import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import CTable from "../../components/table/CTable";
import useAxios from "../../hooks/useAxios";
import { FinanceRecord } from "./model/FinanceRecord";
import { FINANCE_TABLE_MODEL } from "./model/FinanceTableModel";
import EditFinanceModal from "./sections/EditFinanceModal";
import { IoIosAddCircleOutline } from "react-icons/io";
import CIconButton from "../../components/icon-button/CIconButton";
import { COLOR_BLUE } from "../../constants/Colors";
import { FinanceService } from "./service/FinanceService";

const FinancesPage = () => {
  const [selectedFinanceRecord, setSelectedFinanceRecord] = useState<FinanceRecord>();
  const [isEditFinanceModalOpen, setIsEditFinanceModalOpen] = useState(false);
  const [financeRecords, setFinanceRecords] = useState<FinanceRecord[]>([]);
  const axios = useAxios();
  const financeService = new FinanceService(axios);

  useEffect(() => {
    financeService.getFinances().then((response) => {
      setFinanceRecords(response.data);
    });
  }, []);

  function handleRowSelected(id: string) {
    setSelectedFinanceRecord(financeRecords.find((record) => record.id === id));
    setIsEditFinanceModalOpen(true);
  }

  function handleEditFinanceModalClosed() {
    setIsEditFinanceModalOpen(false);
    setSelectedFinanceRecord(undefined);
  }

  function handleEditFinanceModalSubmitted(record: FinanceRecord) {
    // If ID === null then create else update
    record.id
      ? financeService.updateFinance(record).then((response) => {
          const newFinanceRecords = financeRecords.map((financeRecord) => {
            return financeRecord.id === response.data.id ? record : financeRecord;
          });
          setFinanceRecords(newFinanceRecords);
        })
      : financeService.createFinance(record).then((response) => {
          const newFinanceRecords = [...financeRecords, response.data];
          setFinanceRecords(newFinanceRecords);
        });
    handleEditFinanceModalClosed();
  }

  function handleAddButtonClicked() {
    setIsEditFinanceModalOpen(true);
  }

  return (
    <Box>
      <CTable
        title="Finances"
        data={financeRecords}
        headCells={FINANCE_TABLE_MODEL}
        onRowSelected={handleRowSelected}
        actionButtons={[
          <CIconButton
            key="addButton"
            onButtonClick={handleAddButtonClicked}
            color={COLOR_BLUE}
            icon={<IoIosAddCircleOutline />}
          ></CIconButton>,
        ]}
      />
      <EditFinanceModal
        selectedFinanceRecord={selectedFinanceRecord}
        open={isEditFinanceModalOpen}
        onClose={handleEditFinanceModalClosed}
        onSubmit={handleEditFinanceModalSubmitted}
      />
    </Box>
  );
};

export default FinancesPage;
