"use client"

import {useEffect, useRef} from "react";
import * as DbService from "@/services/databaseService";
import {useAppDispatch} from "@/store/hooks";
import {employeeSlice} from "@/store/slices/employeeSlice";

export const LoadEmployees = () => {

    const dispatch = useAppDispatch();
    const { setEmployees, setLoadingFailed } = employeeSlice.actions;

    const loaded = useRef<boolean>(false);

    useEffect(() => {
        if (!loaded.current) {
            DbService.getAllEmployeesAsync()
                .then(data => dispatch(setEmployees(data)))
                .catch(err => {
                    console.error("Failed to load employees", err);
                    dispatch(setLoadingFailed());
                })
                .finally(() => loaded.current = true);
        }

    }, [dispatch, loaded, setEmployees, setLoadingFailed]);

    return null;
}