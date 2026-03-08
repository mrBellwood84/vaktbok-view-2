import * as DbService from "@/services/databaseService";
import {shiftCodeSlice} from "@/store/slices/shiftCodeSlice";
import {useEffect, useRef} from "react";
import {useAppDispatch} from "@/store/hooks";

export const LoadShiftCodes = () => {
    const dispatch = useAppDispatch();
    const { setShiftCodes, setLoadingFailed } = shiftCodeSlice.actions;

    const loaded = useRef<boolean>(false);

    useEffect(() => {
        if (!loaded.current) {
            DbService.getAllShiftCodesAsync()
                .then(data => dispatch(setShiftCodes(data)))
                .catch(err => {
                    console.error("Failed to load shift codes", err);
                    dispatch(setLoadingFailed());
                })
                .finally(() => loaded.current = true);
        }
    }, [dispatch, loaded, setLoadingFailed, setShiftCodes]);
}