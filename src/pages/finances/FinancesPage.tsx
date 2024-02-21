import { Button, FormControl, Grid, MenuItem, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import CModal from "../../components/modal/CModal";
import CTable from "../../components/table/CTable";
import { FinanceType } from "../../constants/FinanceType";
import { DATA } from "./mock/finances";
import { FinanceRecord } from "./model/FinanceRecord";
import { FINANCE_TABLE_MODEL } from "./model/FinanceTableModel";
import { isEmpty } from "../../utils/StringUtils";

const FinancesPage = () => {
  const [isFinanceEditModalOpen, setIsFinanceEditModalOpen] = useState(true);
  const [selectedFinanceRecord, setSelectedFinanceRecord] = useState<FinanceRecord | undefined>();
  const [formData, setFormData] = useState<Partial<FinanceRecord> | undefined>();
  const [errors, setErrors] = useState<Map<string, string>>();

  function handleRowSelected(id: number) {
    setSelectedFinanceRecord(DATA.find((record) => record.id === id));
    setFormData(selectedFinanceRecord);
    setIsFinanceEditModalOpen(true);
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as string]: value });
  };

  const handleDateChange = (date: Dayjs | null) => {
    setFormData({ ...formData, dateOfBirth: date });
  };

  function handleFinanceEditModalClosed() {
    setIsFinanceEditModalOpen(false);
    setErrors(new Map());
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submitted successfully
      setIsFinanceEditModalOpen(false);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Map<string, string> = new Map();

    if (isEmpty(formData?.name)) {
      newErrors.set("name", "Name is required");
    }

    if (formData?.amount == 0) {
      newErrors.set("amount", "Amount must be greater than 0");
    }

    setErrors(newErrors);
    return newErrors.size === 0;
  };

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
      >
        <form noValidate onSubmit={handleSubmit}>
          <Grid container direction={"column"} spacing={2}>
            <Grid item>
              <FormControl fullWidth>
                <TextField
                  name="name"
                  required
                  label="Name"
                  defaultValue={selectedFinanceRecord?.name}
                  onChange={handleChange}
                  error={errors?.has("name")}
                  helperText={errors?.get("name")}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <TextField
                  required
                  label="Amount"
                  defaultValue={selectedFinanceRecord?.amount}
                  name="amount"
                  type="number"
                  onChange={handleChange}
                  error={errors?.has("amount")}
                  helperText={errors?.get("amount")}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <TextField
                  required
                  name="type"
                  select
                  label="Type"
                  onChange={handleChange}
                  defaultValue={selectedFinanceRecord?.type ?? ""}
                >
                  {Object.entries(FinanceType).map(([key, value]) => (
                    <MenuItem key={key} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Grid>
            <Grid item>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  defaultValue={dayjs(selectedFinanceRecord?.date)}
                  sx={{ width: "100%" }}
                  label="Date"
                  name="date"
                  onChange={handleDateChange}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Box sx={{ pt: 5, display: "flex", justifyContent: "flex-end", gap: 3 }}>
            <Button onClick={handleFinanceEditModalClosed}>Cancel</Button>
            <Button type={"submit"} variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </CModal>
    </Box>
  );
};

export default FinancesPage;
