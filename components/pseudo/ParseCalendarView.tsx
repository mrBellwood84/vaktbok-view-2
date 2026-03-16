import { useEffect } from "react";

import { getISOWeek } from "date-fns";

import { CalendarWeek } from "@/models/view_model/calendar/CalendarWeek";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { calendarViewSlice, CalendarViewState } from "@/store/slices/calendarViewSlice";

export const ParseCalendarView = () => {
  const dispatch = useAppDispatch();
  const shifts = useAppSelector(state => state.shifts.shifts) ?? [];
  const workdays = useAppSelector(state => state.workdays.workdays) ?? [];
  const { setInitialState } = calendarViewSlice.actions;

  useEffect(() => {
    if (workdays.length === 0) return;

    const minWeek = workdays.at(0)!.Week;
    const minYear = workdays.at(0)!.Year;
    const maxWeek = workdays.at(-1)!.Week;
    const maxYear = workdays.at(-1)!.Year;

    const now = new Date();
    const currentWeek = getISOWeek(now);
    const currentYear = now.getFullYear();

    const calendarWeeks: CalendarWeek[] = [];

    for (const w of workdays) {
      const cwItem = calendarWeeks.find(x => x.week === w.Week && x.year === w.Year);
      if (cwItem) cwItem.workdays.push(w);
      else calendarWeeks.push({ week: w.Week, year: w.Year, workdays: [w] });
    }

    const initialState: CalendarViewState = {
      minWeek, minYear, maxWeek, maxYear,
      selectedWeek: currentWeek,
      selectedYear: currentYear,
      calendarWeeks,
      selectedShifts: shifts,
      calendarInitializing: false,
      calendarViewLoading: false,
    };

    dispatch(setInitialState(initialState));

  }, [dispatch, setInitialState, shifts, workdays]); // Kjører bare når dataene endres

  return null;
};