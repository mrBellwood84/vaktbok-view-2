import {ShiftRemark} from "@/models/Entities/ShiftRemark";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ShiftRemarkState {
    data?: ShiftRemark[];
    filtered?: ShiftRemark[];
    loading: boolean;
    loadError: boolean;
}

const initialState: ShiftRemarkState = {
    loading: true,
    loadError: false,
}

export const shiftRemarkSlice = createSlice({
    name: "shiftremarks",
    initialState,
    reducers: {
        setShiftRemarks: (state, action: PayloadAction<ShiftRemark[]>) => {
            state.data = action.payload;
            state.filtered = action.payload;
            state.loading = false;
            state.loadError = false;
        },
        setFiltered: (state, action: PayloadAction<ShiftRemark[]>) => {
            state.filtered = action.payload;
        },
        setLoadingFailed: (state) => {
            state.loading = false;
            state.loadError = true;
        }
    }
})