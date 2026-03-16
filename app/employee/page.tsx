"use client";

import { ChangeEvent, Fragment, useState } from "react";

import { Box } from "@mui/material";

import { EmployeeChangeDetailDialog } from "@/components/employee/EmployeeChangeDetailDialog";
import { EmployeeSelectList } from "@/components/employee/EmployeeSelectList";
import { EmployeeViewData } from "@/components/employee/EmployeeViewData";
import { LoadEmployees } from "@/components/pseudo/LoadEmployees";
import { AppPageContainer } from "@/components/shared/AppPageContainer";
import AppPageLoading from "@/components/shared/AppPageLoading";
import { AppToolbar } from "@/components/shared/AppToolbar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { employeeSlice } from "@/store/slices/employeeSlice";

const EmployeePage = () => {

  const dispatch = useAppDispatch();

  const { setFiltered } = employeeSlice.actions;
  const { employees, employeeLoading } = useAppSelector(state => state.employees) ?? [];

  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputData = event.target.value;
    setSearchInput(inputData);

    const searchParts = inputData.toLowerCase().split(" ").filter(Boolean);

    const searchResult = employees!.filter(e => {
      const nameNorm = e.Name.toLowerCase();
      return searchParts.every(part => nameNorm.includes(part));
    });

    dispatch(setFiltered(searchResult));
  };

  if (employeeLoading) {
    return (
      <Fragment>
        <LoadEmployees />
        <AppPageLoading />
      </Fragment>
    );
  }

  return <AppPageContainer
    title="Ansatte"
    toolbar={<AppToolbar value={searchInput} onChange={handleSearchChange}/>}
  >
    <LoadEmployees/>
    <EmployeeChangeDetailDialog />
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <EmployeeSelectList/>
      <EmployeeViewData/>
    </Box>
  </AppPageContainer>;
};

export default EmployeePage;