import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Employee } from "@/models/entities/Employee";

interface EmployeeState {
  employees?: Employee[];
  employeeFiltered?: Employee[];
  employeeLoading: boolean;
  employeeLoadError: boolean;
}

const initialState: EmployeeState = {
  employeeLoading: true,
  employeeLoadError: false,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      const filtered = action.payload.filter(e => {
        if (e.Name !== "LEDIG") return e;
      });
      state.employees = filtered;
      state.employeeFiltered = filtered;
      state.employeeLoading = false;
      state.employeeLoadError = false;
    },
    setFiltered: (state, action: PayloadAction<Employee[]>) => {
      state.employeeFiltered = action.payload;
    },
    setLoadingFailed: (state) => {
      state.employeeLoading = false;
      state.employeeLoadError = true;
    },
  },
});