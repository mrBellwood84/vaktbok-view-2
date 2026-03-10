"use client"

import {AppPageContainer} from "@/components/shared/AppPageContainer";
import {LoadEmployees} from "@/components/pseudo/LoadEmployees";
import {Box} from "@mui/material";
import {EmployeeSelectList} from "@/components/employee/EmployeeSelectList";
import {EmployeeViewData} from "@/components/employee/EmployeeViewData";
import {AppToolbar} from "@/components/shared/AppToolbar";
import {ChangeEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {employeeViewSlice} from "@/store/slices/employeeViewSlice";
import {employeeSlice} from "@/store/slices/employeeSlice";
import {documentGetInitialProps} from "@mui/material-nextjs/v13-pagesRouter";

const EmployeePage = () => {

    const dispatch = useAppDispatch()

    const { setFiltered } = employeeSlice.actions;
    const allEmployees = useAppSelector(state => state.employees.employees) ?? [];

    const [searchInput, setSearchInput] = useState<string>("");

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputData = event.target.value;
        setSearchInput(inputData);

        const searchParts = inputData.toLowerCase().split(" ").filter(Boolean)

        const searchResult = allEmployees.filter(e => {
            const nameNorm = e.Name.toLowerCase();
            return searchParts.every(part => nameNorm.includes(part));
        })

        dispatch(setFiltered(searchResult));
    }

    return <AppPageContainer title="Ansatte">
        <LoadEmployees />

        <AppToolbar value={searchInput} onChange={handleSearchChange} />

        <Box sx={{display: "flex", flexDirection: "row"}}>
            <EmployeeSelectList />
            <EmployeeViewData />
        </Box>
    </AppPageContainer>
}

export default EmployeePage;