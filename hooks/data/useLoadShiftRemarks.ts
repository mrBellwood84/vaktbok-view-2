import { useEffect } from "react";

import * as DbService from "@/services/databaseService";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { shiftRemarkSlice } from "@/store/slices/shiftRemarkSlice";

export const useLoadShiftRemarks = () => {
  const dispatch = useAppDispatch();
  const { setShiftRemarks, setLoadingFailed } = shiftRemarkSlice.actions;
  const loading = useAppSelector(state => state.shiftRemarks.loading);

  useEffect(() => {
    if (loading) {
      DbService.getAllShiftRemarksAsync()
        .then(data => dispatch(setShiftRemarks(data)))
        .catch(err => {
          console.error("Failed to load Shift Remarks", err);
          dispatch(setLoadingFailed());
        });
    }
  },[dispatch, loading, setLoadingFailed, setShiftRemarks]);

};