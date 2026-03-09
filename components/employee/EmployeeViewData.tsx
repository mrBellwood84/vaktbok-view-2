"use client"

import {Box, Divider, Typography} from "@mui/material";
import {useAppSelector} from "@/store/hooks";

export const EmployeeViewData = () => {

    const selectedEmployee = useAppSelector(state => state.employeeView.selectedEmployee);

    // no employee or employee failed loading
    if (!selectedEmployee) {
        return (
            <Box sx={{m: 2, flexGrow: 1}}>
                <Typography variant="h5" textAlign="center">
                    Ingen ansatt valgt!
                </Typography>
            </Box>
        )
    }

    // employee loaded and features calculated
    return (
        <Box sx={{m: 2, flexGrow: 1}}>
            <Typography variant="h5" textAlign="center">
                {selectedEmployee.Name}
            </Typography>
            <Divider sx={{m: 2, flexGrow: 1}}/>
            <h3>Features</h3>
            <ul>
                <li>Total antall skift</li>
                <li>Total endrede skift</li>
                <li>Oversikt ukesplan antall type skift</li>
                <li>Selectbox for endrede vakter</li>
                <li>Se historie for endrede vakter</li>
            </ul>
            <h3>Huskeliste</h3>
            <ul>
                <li>Last inn data på ansatt list click!</li>
                <li>Regn ut feature verdier og legg til i state!</li>
            </ul>

        </Box>
    )
}