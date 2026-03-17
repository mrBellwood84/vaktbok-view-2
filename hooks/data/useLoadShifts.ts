import { useEffect } from "react";

import * as DbService from "@/services/databaseService";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { shiftsSlice } from "@/store/slices/shiftsSlice";


export const useLoadShifts = () => {
  const dispatch = useAppDispatch();
  const { setShifts, setLoadingFailed } = shiftsSlice.actions;
  const loading = useAppSelector(state => state.shifts.shiftsLoading);


  useEffect(() => {
    if (loading) {
      DbService.getAllShiftsAsync()
        .then(data => dispatch(setShifts(data)))
        .catch(error => {
          console.error("Failed to load Shifts", error);
          dispatch(setLoadingFailed());
        });
    }
  },[dispatch, loading, setLoadingFailed, setShifts]);
};