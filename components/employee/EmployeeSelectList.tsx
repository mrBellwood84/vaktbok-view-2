"use client"

import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {ListContainer} from "@/components/shared/ListContainer";
import {AppListButton} from "@/components/shared/AppListButton";
import {Employee} from "@/models/entities/Employee";
import {employeeViewSlice} from "@/store/slices/employeeViewSlice";

export const EmployeeSelectList = () => {

    const {
        employeeFiltered,
        employeeLoading,
        employeeLoadError
    } = useAppSelector(state => state.employees)

    const dispatch = useAppDispatch();

    const buttonClick = (employee: Employee) => {
        dispatch(employeeViewSlice.actions.setSelectedEmployee(employee));
    }

    return (
        <ListContainer loading={employeeLoading} loadFailed={employeeLoadError} width={250}>
            {employeeFiltered && employeeFiltered.map(e => (
                <AppListButton key={e.Id} label={e.Name} data={e} onClick={buttonClick} />
            ))}
        </ListContainer>
    )

}