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
import { Alert, Box } from "@mui/material";
import DeleteFinanceModal from "./sections/DeleteFinanceModal";
import { AxiosResponse } from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { FinanceState } from "../../store/reducer";

const FinancesPage = () => {
  const [selectedFinanceRecord, setSelectedFinanceRecord] = useState<FinanceRecord>();
  const [isEditFinanceModalOpen, setIsEditFinanceModalOpen] = useState(false);
  const [isDeleteFinanceModalOpen, setIsDeleteFinanceModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const financeRecords: FinanceRecord[] = useSelector(
    (state: FinanceState) => state.financeRecords,
  );

  const axios = useAxios();

  const financeService = new FinanceService(axios);

  useEffect(() => {
    financeService
      .getFinances()
      .then((response) => {
        dispatch({ type: "SET_RECORDS", records: response.data }); // Dispatch action here
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
      ? financeService.updateFinance(record).then(handleUpdateResponse(record)).catch(handleError)
      : financeService.createFinance(record).then(handleCreateResponse()).catch(handleError);
    handleEditFinanceModalClosed();
  }

  function handleCreateResponse() {
    return (response: AxiosResponse) => {
      dispatch({ type: "ADD_RECORD", record: response.data }); // Dispatch action here
    };
  }

  function handleUpdateResponse(record: FinanceRecord) {
    return () => dispatch({ type: "UPDATE_RECORD", record });
  }
  function handleDeleteFinanceModalSubmitted() {
    financeService
      .deleteFinance(selectedFinanceRecord!.id)
      .then(() => {
        dispatch({ type: "REMOVE_RECORD", recordId: selectedFinanceRecord!.id });
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

const mapStateToProps = (state: any) => {
  return {
    financeRecord: state.financeRecords,
  };
};

export default connect(mapStateToProps)(FinancesPage);
