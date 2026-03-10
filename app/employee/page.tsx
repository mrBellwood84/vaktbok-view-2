"use client"

import {AppPageContainer} from "@/components/shared/AppPageContainer";
import {LoadEmployees} from "@/components/pseudo/LoadEmployees";
import {Box} from "@mui/material";
import {EmployeeSelectList} from "@/components/employee/EmployeeSelectList";
import {EmployeeViewData} from "@/components/employee/EmployeeViewData";
import {AppToolbar} from "@/components/shared/AppToolbar";
import {ChangeEvent, useState} from "react";

const EmployeePage = () => {

    const [searchInput, setSearchInput] = useState<string>("");
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputData = event.target.value;
        setSearchInput(inputData);
    }

    return <AppPageContainer title="Ansatte">
        <LoadEmployees />

        <AppToolbar value={searchInput} onChange={handleSearchChange} />

        <Box sx={{display: "flex", flexDirection: "row"}}>
            <EmployeeSelectList />
            <EmployeeViewData />

        </Box>

        <div>
            <p>Denne siden skal inneholde forskjellige data per ansatt. Den skal inneholde følgende features:</p>
            <ul>
                <li>
                    Heatmap for antall vakter fordelt på uker. Type senvakt på fredager og normalvakt på fredag
                </li>
                <li>
                    Antall endrede vakter
                </li>
            </ul>
        </div>
    </AppPageContainer>
}

export default EmployeePage;