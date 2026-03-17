import { useEffect } from "react";

import * as DbService from "@/services/databaseService";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { workdaySlice } from "@/store/slices/workdaySlice";

export const useLoadWorkdays = () => {
  const dispatch = useAppDispatch();
  const { setWorkday, setLoadingFailed } = workdaySlice.actions;
  const loading = useAppSelector(state => state.workdays.workdayLoading);

  useEffect(() => {
    if (loading) {
      DbService.getAllWorkdaysAsync()
        .then(data => dispatch(setWorkday(data)))
        .catch(error => {
          console.error("Failed to load workday", error);
          dispatch(setLoadingFailed());
        });
    }
  },[dispatch, loading, setLoadingFailed, setWorkday]);
};