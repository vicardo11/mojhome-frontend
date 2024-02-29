import { ReactElement } from "react";
import { IconButton } from "@mui/material";

function CIconButton(props: Props) {
  return (
    <IconButton disableFocusRipple onClick={props.onButtonClick} sx={{ color: props.color }}>
      {props.icon}
    </IconButton>
  );
}

interface Props {
  icon: ReactElement;
  color: string;
  onButtonClick: () => void;
}

export default CIconButton;
