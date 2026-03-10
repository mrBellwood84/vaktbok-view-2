"use client";

import { useEffect, useRef } from "react";

import * as DbService from "@/services/databaseService";
import { useAppDispatch } from "@/store/hooks";
import { workdaySlice } from "@/store/slices/workdaySlice";

export const LoadWorkdays = () => {

  const dispatch = useAppDispatch();
  const { setWorkday, setLoadingFailed } = workdaySlice.actions;

  const loading = useRef<boolean>(true);

  useEffect(() => {
    if (loading.current) {
      DbService.getAllWorkdaysAsync()
        .then(data => dispatch(setWorkday(data)))
        .catch(err => {
          console.error("Failed to load all workdays", err);
          dispatch(setLoadingFailed());
        })
        .finally(() => loading.current = false);
    }

  }, [dispatch, loading, setLoadingFailed, setWorkday]);

  return null;
};