import {Employee} from "@/models/entities/Employee";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface EmployeeState {
    data?: Employee[];
    filtered?: Employee[];
    loading: boolean;
    loadError: boolean;
}

const initialState: EmployeeState = {
    loading: true,
    loadError: false,
}

export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        setEmployees: (state, action: PayloadAction<Employee[]>) => {
            state.data = action.payload;
            state.filtered = action.payload;
            state.loading = false;
            state.loadError = false;
        },
        setFiltered: (state, action: PayloadAction<Employee[]>) => {
            state.filtered = action.payload;
        },
        setLoadingFailed: (state) => {
            state.loading = false;
            state.loadError = true;
        },
    }
});