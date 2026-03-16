"use client";

import { ChangeEvent, Fragment, useState } from "react";

import { getISOWeek } from "date-fns";

import { CalendarNavigation } from "@/components/calendar/CalendarNavigation";
import { LoadShifts } from "@/components/pseudo/LoadShifts";
import { LoadWorkdays } from "@/components/pseudo/LoadWorkdays";
import { ParseCalendarView } from "@/components/pseudo/ParseCalendarView";
import { AppPageContainer } from "@/components/shared/AppPageContainer";
import LoadingSpinner from "@/components/shared/AppPageLoading";
import { AppToolbar } from "@/components/shared/AppToolbar";
import { useAppSelector } from "@/store/hooks";

const CalendarPage = () => {

  const shiftsLoading = useAppSelector(state => state.shifts.shiftsLoading);
  const workdayLoading = useAppSelector(state => state.workdays.workdayLoading);
  const loading =shiftsLoading || workdayLoading;

  const viewLoading = useAppSelector(state => state.calendarView.calendarInitializing);

  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // load and parse data
  if (loading || viewLoading) {
    return <Fragment>
      {loading && (
        <Fragment>
          <LoadShifts/>
          <LoadWorkdays/>
        </Fragment>)}
      {!loading && viewLoading && <ParseCalendarView />}
      <LoadingSpinner />
    </Fragment>;
  }

  const now = new Date();
  const currentWeekNumber = getISOWeek(now);
  
  return <AppPageContainer
    title="Kalender"
    toolbar={<AppToolbar value={searchValue} onChange={handleSearchOnChange} centerElement={<CalendarNavigation />} /> }>


    <div>DEV :: NOW {"->"} {currentWeekNumber}</div>

    <div>
      <p>Her kommer en kalender med ukesvisning. Den vil ha følgende features</p>
      <ul>
        <li>
          Navigasjon for uke og år. Slider eller valg?
        </li>
        <li>
          Søkefelt for ansatt
        </li>
        <li>
          Markert ramme på arbeidsplan for skift som er endret
        </li>
        <li>
          Dropdown meny for skift som er endret
        </li>
        <li>
          Filter for å kun vise vakter som har blitt endret!
        </li>
      </ul>
    </div>
  </AppPageContainer>;
};

export default CalendarPage;