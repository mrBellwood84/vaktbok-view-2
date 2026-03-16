import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Workday } from "@/models/entities/Workday";

interface WorkdayState {
  workdays?: Workday[];
  workdaysFiltered?: Workday[];
  workdayLoading: boolean;
  workdayLoadError: boolean;
}

const initialState: WorkdayState = {
  workdayLoading: true,
  workdayLoadError: false,
};

export const workdaySlice = createSlice({
  name: "workday",
  initialState,
  reducers: {
    setWorkday: (state, action: PayloadAction<Workday[]>) => {
      state.workdays = action.payload;
      state.workdaysFiltered = action.payload;
      state.workdayLoading = false;
      state.workdayLoadError = false;
    },
    setFiltered: (state, action: PayloadAction<Workday[]>) => {
      state.workdaysFiltered = action.payload;
    },
    setLoadingFailed: (state) => {
      state.workdayLoading = false;
      state.workdayLoadError = true;
    },
  },
});