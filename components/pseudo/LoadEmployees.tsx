"use client"

import {useEffect, useRef} from "react";
import * as DbService from "@/services/databaseService";
import {useAppDispatch} from "@/store/hooks";
import {employeeSlice} from "@/store/slices/employeeSlice";

export const LoadEmployees = () => {

    const dispatch = useAppDispatch();
    const { setEmployees, setLoadingFailed } = employeeSlice.actions;

    const loading = useRef<boolean>(true);

    useEffect(() => {
        if (loading.current) {
            DbService.getAllEmployeesAsync()
                .then(data => dispatch(setEmployees(data)))
                .catch(err => {
                    console.error("Failed to load employees", err);
                    dispatch(setLoadingFailed());
                })
                .finally(() => loading.current = false);
        }

    }, [dispatch, loading, setEmployees, setLoadingFailed]);

    return null;
}