"use client";

import { useEffect, useRef } from "react";

import * as DbService from "@/services/databaseService";
import { useAppDispatch } from "@/store/hooks";
import { shiftCodeSlice } from "@/store/slices/shiftCodeSlice";

export const LoadShiftCodes = () => {
  const dispatch = useAppDispatch();
  const { setShiftCodes, setLoadingFailed } = shiftCodeSlice.actions;

  const loading = useRef<boolean>(true);

  useEffect(() => {
    if (loading.current) {
      DbService.getAllShiftCodesAsync()
        .then(data => dispatch(setShiftCodes(data)))
        .catch(err => {
          console.error("Failed to load shift codes", err);
          dispatch(setLoadingFailed());
        })
        .finally(() => loading.current = false);
    }
  }, [dispatch, loading, setLoadingFailed, setShiftCodes]);

  return null;
};