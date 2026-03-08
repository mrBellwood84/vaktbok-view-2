import {Shift} from "@/models/entities/Shift";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ShiftState {
    data?: Shift[],
    filtered?: Shift[],
    loading: boolean,
    loadError: boolean,
}

const initialState: ShiftState = {
    loading: true,
    loadError: false,
}

export const shiftsSlice = createSlice({
    name: "shifts",
    initialState,
    reducers: {
        setShifts: (state, action: PayloadAction<Shift[]>) => {
            state.data = action.payload;
            state.filtered = action.payload;
            state.loading = false;
            state.loading = false;
        },
        setFiltered: (state, action: PayloadAction<Shift[]>) => {
            state.filtered = action.payload;
        },
        setLoadingFailed: (state) => {
            state.loading = false;
            state.loadError = true;
        }
    }
});
