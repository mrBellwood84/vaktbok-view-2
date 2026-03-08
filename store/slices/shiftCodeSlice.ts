import {ShiftCode} from "@/models/entities/ShiftCode";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ShiftCodeState {
    data?: ShiftCode[];
    filtered?: ShiftCode[];
    loading: boolean;
    loadError: boolean;
}

const initialState: ShiftCodeState = {
    loading: true,
    loadError: false,
}

export const shiftCodeSlice = createSlice({
    name: "shiftcode",
    initialState,
    reducers: {
        setShiftCodes: (state, action: PayloadAction<ShiftCode[]>) => {
            state.data = action.payload;
            state.filtered = action.payload;
            state.loading = false;
            state.loadError = false;
        },
        setFiltered: (state, action: PayloadAction<ShiftCode[]>) => {
            state.filtered = action.payload;
        },
        setLoadingFailed: (state) => {
            state.loading = false;
            state.loadError = true;
        }
    }
})
