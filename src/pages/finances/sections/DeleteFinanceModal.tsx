import CModal from "../../../components/modal/CModal";
import { Box, Button, Typography } from "@mui/material";

const DeleteFinanceModal = (props: Props) => {
  function handleModalClose() {
    props.onClose();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit();
  };

  const handleClose = (e: React.FormEvent) => {
    e.preventDefault();
    props.onClose();
  };

  return (
    <CModal title="Delete finance" open={props.open} onClose={handleModalClose}>
      <Typography>Are you sure you want to delete this record?</Typography>
      <Box sx={{ pt: 3, display: "flex", gap: 2 }}>
        <Button onClick={handleClose}>Close</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </CModal>
  );
};

interface Props {
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

export default DeleteFinanceModal;
