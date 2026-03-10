import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Employee } from "@/models/entities/Employee";

interface EmployeeViewState {
  selectedEmployee?: Employee;
}

const initialState: EmployeeViewState = {};

export const employeeViewSlice = createSlice({
  name: "employeeView",
  initialState,
  reducers: {
    setSelectedEmployee: (state, action: PayloadAction<Employee>) => {
      state.selectedEmployee = action.payload;
    },
  },
});