import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Shift } from "@/models/entities/Shift";

interface ShiftState {
  shifts?: Shift[],
  shiftsFiltered?: Shift[],
  shiftsLoading: boolean,
  shiftsLoadError: boolean,
}

const initialState: ShiftState = {
  shiftsLoading: true,
  shiftsLoadError: false,
};

export const shiftsSlice = createSlice({
  name: "shifts",
  initialState,
  reducers: {
    setShifts: (state, action: PayloadAction<Shift[]>) => {
      state.shifts = action.payload;
      state.shiftsFiltered = action.payload;
      state.shiftsLoading = false;
      state.shiftsLoadError = false;
    },
    setFiltered: (state, action: PayloadAction<Shift[]>) => {
      state.shiftsFiltered = action.payload;
    },
    setLoadingFailed: (state) => {
      state.shiftsLoading = false;
      state.shiftsLoadError = true;
    },
  },
});
