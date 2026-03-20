import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CalendarEmployee } from "@/models/view_model/calendar/CalendarEmployee";
import { CalendarWeek } from "@/models/view_model/calendar/CalendarWeek";


export interface CalendarViewState {
  minWeek: number
  minYear: number
  maxWeek: number
  maxYear: number

  selectedWeek: number
  selectedYear: number

  calendarWeeks: CalendarWeek[];
  selectedShifts: CalendarEmployee[];

  calendarInitializing: boolean;
  calendarViewLoading: boolean;
}

const initialState: CalendarViewState = {
  minWeek: -1,
  minYear: -1,
  maxWeek: -1,
  maxYear: -1,

  selectedWeek: -1,
  selectedYear: -1,

  calendarWeeks: [],
  selectedShifts: [],

  calendarInitializing: true,
  calendarViewLoading: false,
};

export const calendarViewSlice = createSlice({
  name: "calendarView",
  initialState,
  reducers: {
    setInitialState: (state, action: PayloadAction<CalendarViewState>) => {
      state.minWeek = action.payload.minWeek;
      state.minYear = action.payload.minYear;
      state.maxWeek = action.payload.maxWeek;
      state.maxYear = action.payload.maxYear;

      state.selectedWeek = action.payload.selectedWeek;
      state.selectedYear = action.payload.selectedYear;

      state.calendarWeeks = action.payload.calendarWeeks;
      state.selectedShifts = action.payload.selectedShifts;

      state.calendarInitializing = false;
      state.calendarViewLoading = false;
    },

    updateSelectedWeekYear: (state, action: PayloadAction<{
      shifts: CalendarEmployee[];
      week: number,
      year: number
    }>) => {
      state.selectedShifts = action.payload.shifts;
      state.selectedYear = action.payload.year;
      state.selectedWeek = action.payload.week;
      state.calendarViewLoading = false;
    },

    setCalendarViewLoading(state, action: PayloadAction<boolean>) {
      state.calendarViewLoading = action.payload;
    },
  },
});