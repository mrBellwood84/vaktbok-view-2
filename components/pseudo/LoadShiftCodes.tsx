"use client"

import * as DbService from "@/services/databaseService";
import {shiftCodeSlice} from "@/store/slices/shiftCodeSlice";
import {useEffect, useRef} from "react";
import {useAppDispatch} from "@/store/hooks";

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
}