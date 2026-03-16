"use client";

import { Fragment } from "react";

import { getISOWeek } from "date-fns";

import { LoadShifts } from "@/components/pseudo/LoadShifts";
import { AppPageContainer } from "@/components/shared/AppPageContainer";
import LoadingSpinner from "@/components/shared/AppPageLoading";
import { useAppSelector } from "@/store/hooks";

const CalendarPage = () => {

  const shiftLoading = useAppSelector(state => state.shifts.shiftsLoading);

  if (shiftLoading) {
    return <Fragment>
      <LoadShifts />
      <LoadingSpinner />
    </Fragment>;
  }

  const now = new Date();
  const currentWeekNumber = getISOWeek(now);
  
  return <AppPageContainer title="Kalender">
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