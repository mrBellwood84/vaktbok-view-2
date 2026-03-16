import React, { useState } from "react";

import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, ButtonGroup } from "@mui/material";

import { CalendarDateSelect } from "@/components/calendar/CalendarDateSelect";

export const CalendarNavigation = () => {

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) =>  setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: "flex", alignItems:"center", flexGrow: 1 }}>
      <ButtonGroup size="medium">
        <Button startIcon={<ArrowBack />} variant="contained" size="small" sx={{ boxShadow: "none" }}/>
        <Button variant="outlined" onClick={handleOpen}>Week | year</Button>
        <Button endIcon={<ArrowForward />}  variant="contained" size="small" sx={{ boxShadow: "none" }} />
      </ButtonGroup>

      <CalendarDateSelect open={open} handleClose={handleClose} anchorEl={anchorEl!} />
    </Box>
  );
};