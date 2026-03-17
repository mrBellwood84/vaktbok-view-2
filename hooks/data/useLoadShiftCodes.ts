import { useEffect } from "react";

import * as DbService from "@/services/databaseService";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { shiftCodeSlice } from "@/store/slices/shiftCodeSlice";

export const useLoadShiftCodes = () => {
  const dispatch = useAppDispatch();
  const { setShiftCodes, setLoadingFailed } = shiftCodeSlice.actions;
  const loading = useAppSelector(state => state.shiftCodes.loading);

  useEffect(() => {
    if (loading) {
      DbService.getAllShiftCodesAsync()
        .then((data) => dispatch(setShiftCodes(data)))
        .catch((err) => {
          console.error("Failed to load Shift Codes", err);
          dispatch(setLoadingFailed());
        });
    }
  },[dispatch, loading, setLoadingFailed, setShiftCodes]);
};