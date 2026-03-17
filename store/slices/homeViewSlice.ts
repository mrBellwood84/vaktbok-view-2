import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HomeViewState {
  employeeCount?: number;
  shiftCount?: number;
  changesCount?: number;
  noRemarkCount?: number;
  loading: boolean
}

const initialState: HomeViewState = {
  loading: true,
};

export const homeViewSlice = createSlice({
  name: "homeView",
  initialState,
  reducers: {
    setInitialHomeView: (state, action: PayloadAction<HomeViewState>) => {
      state.employeeCount = action.payload.employeeCount;
      state.shiftCount = action.payload.shiftCount;
      state.changesCount = action.payload.changesCount;
      state.noRemarkCount = action.payload.noRemarkCount;
      state.loading = false;
    },
  },
});