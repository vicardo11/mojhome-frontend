import { Box, Button, Modal, Typography } from "@mui/material";
import "./CModal.scss";

function CModal(props: Props) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box
        className="modal-content"
        sx={{
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: { xs: "85%", sm: "50%", md: "40%", lg: "35%", xl: "25%" },
        }}
      >
        <Typography className="modal-title" sx={{ pb: 3 }} variant="h6">
          {props.title}
        </Typography>
        {props.children}
        <Box
          sx={{ pt: 5, display: "flex", justifyContent: "flex-end", gap: 3 }}
        >
          <Button onClick={props.onClose}>
            {props.submitButtonLabel || "Cancel"}
          </Button>
          <Button onClick={props.onSubmit} variant="contained">
            {props.submitButtonLabel || "Submit"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

interface Props {
  title: string;
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children: React.ReactNode;
  cancelButtonLabel?: string;
  submitButtonLabel?: string;
}

export default CModal;
