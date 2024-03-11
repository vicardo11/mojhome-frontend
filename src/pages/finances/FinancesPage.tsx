import React, { useEffect, useState } from "react";
import CTable, { Order } from "../../components/table/CTable";
import useAxios from "../../hooks/useAxios";
import { FinanceRecord } from "./model/FinanceRecord";
import { FINANCE_TABLE_MODEL } from "./model/FinanceTableModel";
import EditFinanceModal from "./sections/EditFinanceModal";
import { IoIosAddCircleOutline } from "react-icons/io";
import CIconButton from "../../components/icon-button/CIconButton";
import { COLOR_BLUE } from "../../constants/Colors";
import { FinanceApiService } from "./service/FinanceApiService";
import { Alert, Box } from "@mui/material";
import DeleteFinanceModal from "./sections/DeleteFinanceModal";
import { AxiosResponse } from "axios";
import IncomeExpenseChart from "./sections/IncomeExpenseChart";
import CategoriesChart from "./sections/CategoriesChart";

const FinancesPage = () => {
  const [selectedFinanceRecord, setSelectedFinanceRecord] = useState<FinanceRecord>();
  const [isEditFinanceModalOpen, setIsEditFinanceModalOpen] = useState(false);
  const [isDeleteFinanceModalOpen, setIsDeleteFinanceModalOpen] = useState(false);
  const [financeRecords, setFinanceRecords] = useState<FinanceRecord[]>([]);
  const [error, setError] = useState<string | null>(null);

  const axios = useAxios();

  const financeApiService = new FinanceApiService(axios);

  useEffect(() => {
    financeApiService
      .getFinances()
      .then((response) => {
        setFinanceRecords(response.data);
      })
      .catch(handleError);
  }, []);

  function handleRowSelected(id: string) {
    setSelectedFinanceRecord(financeRecords.find((record) => record.id === id));
    setIsEditFinanceModalOpen(true);
  }

  function handleEditFinanceModalClosed() {
    setIsEditFinanceModalOpen(false);
    setSelectedFinanceRecord(undefined);
  }

  function handleDeleteButtonClicked(id: string) {
    setSelectedFinanceRecord(financeRecords.find((record) => record.id === id));
    setIsDeleteFinanceModalOpen(true);
  }

  function handleEditFinanceModalSubmitted(record: FinanceRecord) {
    // If ID === null then create else update
    record.id
      ? financeApiService
          .updateFinance(record)
          .then(handleUpdateResponse(record))
          .catch(handleError)
      : financeApiService.createFinance(record).then(handleCreateResponse()).catch(handleError);
    handleEditFinanceModalClosed();
  }

  function handleCreateResponse() {
    return (response: AxiosResponse) => {
      const newFinanceRecords = [...financeRecords, response.data];
      setFinanceRecords(newFinanceRecords);
    };
  }

  function handleUpdateResponse(record: FinanceRecord) {
    return (response: AxiosResponse) => {
      const newFinanceRecords = financeRecords.map((financeRecord) => {
        return financeRecord.id === response.data.id ? record : financeRecord;
      });
      setFinanceRecords(newFinanceRecords);
    };
  }
  function handleDeleteFinanceModalSubmitted() {
    financeApiService
      .deleteFinance(selectedFinanceRecord!.id)
      .then((response) => {
        setFinanceRecords(response.data);
      })
      .catch(handleError);
    setIsDeleteFinanceModalOpen(false);
    setSelectedFinanceRecord(undefined);
  }

  function handleError(error: any) {
    const errorMessage: string = error.response?.data?.message ?? "An error occurred";
    setError(errorMessage);
  }

  return (
    <Box>
      <Alert sx={{ mb: 3, display: error || "none" }} severity="error">
        {error}
      </Alert>
      <CTable
        title="Finances"
        orderBy="date"
        orderDirection={Order.DESC}
        data={financeRecords}
        headCells={FINANCE_TABLE_MODEL}
        onRowSelected={handleRowSelected}
        actionButtons={[
          <CIconButton
            key="addButton"
            onButtonClick={() => setIsEditFinanceModalOpen(true)}
            color={COLOR_BLUE}
            icon={<IoIosAddCircleOutline />}
          ></CIconButton>,
        ]}
        deleteOption
        onDeleteButtonClicked={handleDeleteButtonClicked}
      />
      <Box
        sx={{
          display: { laptop: "flex", xs: "block" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: { laptop: "49%", xs: "100%" } }}>
          <IncomeExpenseChart data={financeRecords} />
        </Box>
        <Box sx={{ width: { laptop: "49%", xs: "100%" } }}>
          <CategoriesChart data={financeRecords} />
        </Box>
      </Box>
      <EditFinanceModal
        selectedFinanceRecord={selectedFinanceRecord}
        open={isEditFinanceModalOpen}
        onClose={handleEditFinanceModalClosed}
        onSubmit={handleEditFinanceModalSubmitted}
      />
      <DeleteFinanceModal
        open={isDeleteFinanceModalOpen}
        onClose={() => setIsDeleteFinanceModalOpen(false)}
        onSubmit={handleDeleteFinanceModalSubmitted}
      />
    </Box>
  );
};

export default FinancesPage;
