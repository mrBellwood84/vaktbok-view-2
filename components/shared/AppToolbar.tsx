"use client";

import { ChangeEvent } from "react";

import { FilterList, Search } from "@mui/icons-material";
import { Box, Divider, IconButton, InputAdornment, TextField, Toolbar } from "@mui/material";

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AppToolbar = ({ value, onChange }: Props) => {
  return (
    <Box>
      <Toolbar disableGutters>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <IconButton disabled={true} sx={{ mr: 2 }}>
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
      </Toolbar>
      <Divider/>
    </Box>
  );
};