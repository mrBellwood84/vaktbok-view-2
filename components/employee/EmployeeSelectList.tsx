"use client";

import { AppListButton } from "@/components/shared/AppListButton";
import { AppListContainer } from "@/components/shared/AppListContainer";
import { Employee } from "@/models/entities/Employee";
import { EmployeeShiftCodeCount } from "@/models/view_model/employee/EmployeeShiftcodeCount";
import { EmployeeShiftOrdered } from "@/models/view_model/employee/EmployeeShiftOrdered";
import { getAllShiftsByEmployeeIdAsync } from "@/services/databaseService";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { employeeViewSlice } from "@/store/slices/employeeViewSlice";

export const EmployeeSelectList = () => {

  const {
    employeeFiltered,
    employeeLoading,
    employeeLoadError,
  } = useAppSelector(state => state.employees);

  const dispatch = useAppDispatch();
  const { setLoading, setSelectedEmployee } = employeeViewSlice.actions;

  const buttonClick = async (employee: Employee) => {
    dispatch(setLoading(true));
    const shifts  = await getAllShiftsByEmployeeIdAsync(employee.Id);

    const uniqueShiftsSet = new Set<string>();
    const shiftsOrdered: EmployeeShiftOrdered[] = [];
    const shiftCodeCount: EmployeeShiftCodeCount[] = [];

    for (let i = 0; i < shifts.length; i++) {

      const item = shifts[i];

      const workdayId = item.Workday.Id;
      const date = item.Workday.Date;

      if (item.Time !== null) uniqueShiftsSet.add(workdayId);

      const changeItem = shiftsOrdered.find(x => x.date === date);
      if (changeItem) changeItem.shifts.push(item);
      else shiftsOrdered.push({ date, shifts: [ item ] });
    }

    const changedShifts = shiftsOrdered.filter(x => x.shifts.length > 1)
      .sort((a,b) => a.date > b.date ? 1 : -1 );

    for (let i = 0; i < shiftsOrdered.length; i++) {
      const item = shiftsOrdered[i];

      if (item.shifts.length === 1) {
        const code = item.shifts[0].ShiftCode ? item.shifts[0].ShiftCode.Code : "";
        const countItem = shiftCodeCount.find(x => x.code === code);
        if (countItem) {
          countItem.original++;
          countItem.latest++;
          continue;
        }
        shiftCodeCount.push({ code, latest: 1, original: 1 });
        continue;
      }

      const codeOriginal = item.shifts[0].ShiftCode ? item.shifts[0].ShiftCode.Code : "";
      const originCount = shiftCodeCount.find(x => x.code === codeOriginal);
      if (originCount) {
        originCount.original++;
      } else {
        shiftCodeCount.push({ code: codeOriginal, latest: 1, original: 1 });
      }

      const codeLatest = item.shifts.at(-1)?.ShiftCode ? item.shifts.at(-1)?.ShiftCode?.Code : "";
      const latestCount = shiftCodeCount.find(x => x.code === codeLatest);
      if (latestCount) {
        latestCount.latest++;
      } else {
        shiftCodeCount.push({ code: codeLatest ?? "", original: 0, latest: 1 });
      }
    }

    console.warn(shiftCodeCount);


    const uniqueShiftCount = uniqueShiftsSet.size;
    const changedShiftCount = changedShifts.length;

    dispatch(setSelectedEmployee({ employee, shifts, changedShifts, uniqueShiftCount, changedShiftCount, shiftCodeCount }));
  };

  return (
    <AppListContainer loading={employeeLoading} loadFailed={employeeLoadError} width={250}>
      {employeeFiltered && employeeFiltered.map(e => (
        <AppListButton key={e.Id} label={e.Name} data={e} onClick={buttonClick}/>
      ))}
    </AppListContainer>
  );

};