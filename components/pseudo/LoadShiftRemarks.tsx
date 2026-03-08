"use client"

import {useAppDispatch} from "@/store/hooks";
import {shiftRemarkSlice} from "@/store/slices/shiftRemarkSlice";
import {useEffect, useRef} from "react";
import * as DbService from "@/services/databaseService";

export const LoadShiftRemarks = () => {

    const dispatch = useAppDispatch();
    const {setShiftRemarks, setLoadingFailed} = shiftRemarkSlice.actions;

    const loading = useRef<boolean>(true);

    useEffect(() => {
        if (loading.current) {
            DbService.getAllShiftRemarksAsync()
                .then(data => dispatch(setShiftRemarks(data)))
                .catch((err) => {
                    console.error("Failed to load Shift Remarks.", err);
                    dispatch(setLoadingFailed())
                })
                .finally(() => loading.current = false);
        }
    }, [dispatch, loading, setLoadingFailed, setShiftRemarks]);

    return null;
}