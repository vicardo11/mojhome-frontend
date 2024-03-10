import { Button, FormControl, Grid, MenuItem, TextField } from "@mui/material";
import { FinanceType } from "../../../types/FinanceType";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import Box from "@mui/material/Box";
import CModal from "../../../components/modal/CModal";
import { isEmpty } from "../../../utils/StringUtils";
import { useEffect, useState } from "react";
import { FinanceRecord } from "../model/FinanceRecord";
import { isCorrectAmountFormat, isGreaterThanZero } from "../../../utils/NumberUtils";

const EditFinanceModal = (props: Props) => {
  const [formData, setFormData] = useState<Partial<FinanceRecord>>();
  const [errors, setErrors] = useState<Map<string, string>>();

  useEffect(() => {
    setFormData(props.selectedFinanceRecord);
  }, [props.selectedFinanceRecord]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as string]: value });
  };

  const handleDateChange = (date: Dayjs | null) => {
    const newDate = date?.toDate();
    setFormData({ ...formData, date: newDate });
  };

  function handleModalClosed() {
    setErrors(new Map());
    props.onClose();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submitted successfully
      props.onSubmit(formData as FinanceRecord);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Map<string, string> = new Map();

    if (isEmpty(formData?.name)) {
      newErrors.set("name", "Name is required");
    }

    if (!isCorrectAmountFormat(formData?.amount)) {
      newErrors.set("amount", "Maximum of 2 decimal places allowed");
    }
    if (!isGreaterThanZero(formData?.amount)) {
      newErrors.set("amount", "Must be greater than 0");
    }

    if (!formData?.type) {
      newErrors.set("type", "Type is required");
    }

    setErrors(newErrors);
    return newErrors.size === 0;
  };

  return (
    <CModal title={"Edit finance"} open={props.open} onClose={handleModalClosed}>
      <form noValidate onSubmit={handleSubmit}>
        <Grid container direction={"column"} spacing={2}>
          <Grid item>
            <FormControl fullWidth>
              <TextField
                name="name"
                required
                label="Name"
                defaultValue={props.selectedFinanceRecord?.name}
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
                defaultValue={props.selectedFinanceRecord?.amount?.toFixed(2)}
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
                defaultValue={props.selectedFinanceRecord?.type ?? ""}
                error={errors?.has("type")}
                helperText={errors?.get("type")}
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
                defaultValue={dayjs(props.selectedFinanceRecord?.date)}
                sx={{ width: "100%" }}
                label="Date"
                name="date"
                onChange={handleDateChange}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Box sx={{ pt: 5, display: "flex", justifyContent: "flex-end", gap: 3 }}>
          <Button onClick={handleModalClosed}>Cancel</Button>
          <Button type={"submit"} variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </CModal>
  );
};

interface Props {
  selectedFinanceRecord?: FinanceRecord;
  open: boolean;
  onSubmit: (record: FinanceRecord) => void;
  onClose: () => void;
}

export default EditFinanceModal;
