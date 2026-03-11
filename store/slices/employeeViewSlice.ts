import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Employee } from "@/models/entities/Employee";
import { Shift } from "@/models/entities/Shift";
import { EmployeeShiftCodeCount } from "@/models/view_model/employee/EmployeeShiftcodeCount";
import { EmployeeShiftOrdered } from "@/models/view_model/employee/EmployeeShiftOrdered";

interface EmployeeViewState {
  selectedEmployee?: Employee;
  shifts: Shift[];
  uniqueShiftCount: number;
  changedShifts: EmployeeShiftOrdered[],
  changedShiftCount: number;
  shiftCodesCount: EmployeeShiftCodeCount[];
  loading: boolean;
}

const initialState: EmployeeViewState = {
  shifts: [],
  uniqueShiftCount: 0,
  changedShifts: [],
  changedShiftCount: 0,
  shiftCodesCount: [],
  loading: false,
};

export const employeeViewSlice = createSlice({
  name: "employeeView",
  initialState,
  reducers: {
    setSelectedEmployee: (
      state,
      action: PayloadAction<{
        employee: Employee,
        shifts: Shift[],
        uniqueShiftCount: number,
        changedShifts: EmployeeShiftOrdered[],
        changedShiftCount: number
        shiftCodeCount: EmployeeShiftCodeCount[],
      }>) => {

      state.selectedEmployee = action.payload.employee;
      state.shifts = action.payload.shifts;
      state.uniqueShiftCount = action.payload.uniqueShiftCount;
      state.changedShifts = action.payload.changedShifts;
      state.changedShiftCount = action.payload.changedShiftCount;
      state.shiftCodesCount = action.payload.shiftCodeCount;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});