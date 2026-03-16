"use client";

import { ChangeEvent, JSX } from "react";

import { FilterList, Search } from "@mui/icons-material";
import { Box, Divider, IconButton, InputAdornment, TextField, Toolbar } from "@mui/material";

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  centerElement?: JSX.Element
  rightElement?: JSX.Element
}

export const AppToolbar = ({ value, onChange, centerElement = undefined, rightElement = undefined }: Props) => {
  return (
    <Box>
      <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <IconButton disabled={true} sx={{ mr: 1 }} >
            <FilterList/>
          </IconButton>
          <TextField
            variant="standard"
            placeholder="Søk navn"
            value={value}
            onChange={onChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search/>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
        {centerElement ? centerElement : <Box sx={{ flexGrow:1 }}/>}
        {rightElement ? rightElement : <Box sx={{ flexGrow:1 }}/>}
      </Toolbar>
      <Divider/>
    </Box>
  );
};