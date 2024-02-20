import Box from "@mui/material/Box";
import CTable from "../../components/table/CTable";
import { DATA } from "./mock/finances";
import { useState } from "react";
import CModal from "../../components/modal/CModal";
import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FinanceType } from "../../constants/FinanceType";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FinanceRecord } from "./model/FinanceRecord";
import { FINANCE_TABLE_MODEL } from "./model/FinanceTableModel";
import dayjs from "dayjs";

const FinancesPage = () => {
  const [isFinanceEditModalOpen, setIsFinanceEditModalOpen] = useState(true);
  const [selectedFinanceRecord, setSelectedFinanceRecord] = useState<
    FinanceRecord | undefined
  >();

  function handleRowSelected(id: number) {
    setSelectedFinanceRecord(DATA.find((record) => record.id === id));
    setIsFinanceEditModalOpen(true);
  }

  function handleFinanceEditModalClosed() {
    setIsFinanceEditModalOpen(false);
  }

  function handleSubmitForm() {
    validateForm();
  }

  function validateForm() {
    console.log("Validating form");
  }

  return (
    <Box>
      <CTable
        title="Finances"
        data={DATA}
        headCells={FINANCE_TABLE_MODEL}
        onRowSelected={handleRowSelected}
      />
      <CModal
        title={"Edit finance"}
        open={isFinanceEditModalOpen}
        onClose={handleFinanceEditModalClosed}
        onSubmit={handleSubmitForm}
      >
        <Grid container direction={"column"} spacing={2}>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                defaultValue={selectedFinanceRecord?.name}
                sx={{ pl: 1 }}
                id="name"
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <Input
                defaultValue={selectedFinanceRecord?.amount}
                sx={{ pl: 1 }}
                id="amount"
                type="number"
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                defaultValue={selectedFinanceRecord?.type ?? ""}
                id="type"
                label="Type"
              >
                {Object.entries(FinanceType).map(([key, value]) => (
                  <MenuItem key={key} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                defaultValue={dayjs(selectedFinanceRecord?.date)}
                sx={{ width: "100%" }}
                label="Date"
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </CModal>
    </Box>
  );
};

export default FinancesPage;
