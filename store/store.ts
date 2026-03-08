import {configureStore} from "@reduxjs/toolkit";
import {employeeSlice} from "@/store/slices/employeeSlice";
import {shiftCodeSlice} from "@/store/slices/shiftCodeSlice";
import {shiftRemarkSlice} from "@/store/slices/shiftRemarkSlice";
import {workdaySlice} from "@/store/slices/workdaySlice";
import {shiftsSlice} from "@/store/slices/shiftsSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            employees: employeeSlice.reducer,
            shiftCodes: shiftCodeSlice.reducer,
            shiftRemarks: shiftRemarkSlice.reducer,
            workdays: workdaySlice.reducer,
            shifts: shiftsSlice.reducer,
        }
    });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]