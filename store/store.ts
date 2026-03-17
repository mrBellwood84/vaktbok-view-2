import { configureStore } from "@reduxjs/toolkit";

import { calendarViewSlice } from "@/store/slices/calendarViewSlice";
import { employeeSlice } from "@/store/slices/employeeSlice";
import { employeeViewSlice } from "@/store/slices/employeeViewSlice";
import { homeViewSlice } from "@/store/slices/homeViewSlice";
import { shiftCodeSlice } from "@/store/slices/shiftCodeSlice";
import { shiftRemarkSlice } from "@/store/slices/shiftRemarkSlice";
import { shiftsSlice } from "@/store/slices/shiftsSlice";
import { uiSlice } from "@/store/slices/uiSlice";
import { workdaySlice } from "@/store/slices/workdaySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      calendarView: calendarViewSlice.reducer,
      employees: employeeSlice.reducer,
      employeeView: employeeViewSlice.reducer,
      homeView: homeViewSlice.reducer,
      shiftCodes: shiftCodeSlice.reducer,
      shiftRemarks: shiftRemarkSlice.reducer,
      workdays: workdaySlice.reducer,
      shifts: shiftsSlice.reducer,
      ui: uiSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]