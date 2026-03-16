import {  Popover } from "@mui/material";

interface Props {
  open: boolean;
  handleClose: () => void;
  anchorEl: HTMLButtonElement;
}

export const CalendarDateSelect = ({ open, handleClose, anchorEl }:Props) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical:"bottom",
        horizontal:"center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal:"center",
      }}
      elevation={1}
    >

    </Popover>
  );
};