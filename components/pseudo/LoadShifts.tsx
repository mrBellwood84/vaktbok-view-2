"use client";

import { useEffect, useRef } from "react";

import * as DbService from "@/services/databaseService";
import { useAppDispatch } from "@/store/hooks";
import { shiftsSlice } from "@/store/slices/shiftsSlice";

export const LoadShifts = () => {
  const dispatch = useAppDispatch();
  const { setShifts, setLoadingFailed } = shiftsSlice.actions;

  const loading = useRef<boolean>(true);

  useEffect(() => {
    if (loading.current) {
      DbService.getAllShiftsAsync()
        .then(data => dispatch(setShifts(data)))
        .catch(err => {
          console.error("Failed to load Shifts", err);
          dispatch(setLoadingFailed());
        })
        .finally(() => loading.current = false);
    }

  }, [dispatch, loading, setLoadingFailed, setShifts]);

  return null;
};