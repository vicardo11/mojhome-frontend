import { Box, Modal, Typography } from "@mui/material";
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
      </Box>
    </Modal>
  );
}

interface Props {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default CModal;
