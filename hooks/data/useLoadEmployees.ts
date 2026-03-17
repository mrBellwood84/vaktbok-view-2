import { useEffect } from "react";

import * as DbService from "@/services/databaseService";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { employeeSlice } from "@/store/slices/employeeSlice";

export const useLoadEmployees = () => {
  const dispatch = useAppDispatch();
  const { setEmployees, setLoadingFailed } = employeeSlice.actions;
  const loading  = useAppSelector(state => state.employees.employeeLoading);

  useEffect(() => {
    if (loading) {
      DbService.getAllEmployeesAsync()
        .then(data => dispatch(setEmployees(data)))
        .catch(error => {
          console.error("Failed to load employees", error);
          dispatch(setLoadingFailed());
        });
    }
  },[dispatch, loading, setEmployees, setLoadingFailed]);

};