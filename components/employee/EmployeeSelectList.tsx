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

    // get number of changed shifts here!
    const changedShifts = shiftsOrdered.filter(x => x.shifts.length > 1)
      .sort((a,b) => a.date > b.date ? 1 : -1 );

    changedShifts.forEach(x => {
      x.shifts = x.shifts.sort((a,b) => a.CreatedAt > b.CreatedAt ? 1 : -1);
    });


    // look calculates count for different shift codes
    for (let i = 0; i < shiftsOrdered.length; i++) {
      const item = shiftsOrdered[i];

      // set if only one shift found on workday
      if (item.shifts.length === 1) {
        const dayIndex = item.shifts[0].Workday.Day - 1;
        const code = item.shifts[0].ShiftCode ? item.shifts[0].ShiftCode.Code : "";
        if (code == "-") continue;

        const countItem = shiftCodeCount.find(x => x.code === code);

        if (countItem) {
          countItem.original++;
          countItem.latest++;
          countItem.weekdayCount[dayIndex]++;
          continue;
        }

        const newItem: EmployeeShiftCodeCount = { code, latest: 1, original: 1, totalLatest: 0, weekdayCount: [0,0,0,0,0,0,0] };
        newItem.weekdayCount[dayIndex]++;
        shiftCodeCount.push(newItem);
        continue;
      }

      // set if many shifts found on workday
      const codeOriginal = item.shifts[0].ShiftCode ? item.shifts[0].ShiftCode.Code : "";
      if (codeOriginal === "-") continue;
      const originCount = shiftCodeCount.find(x => x.code === codeOriginal);
      if (originCount) {
        originCount.original++;
      } else {
        shiftCodeCount.push({ code: codeOriginal, latest: 0, original: 1, totalLatest: 0, weekdayCount: [0,0,0,0,0,0,0] });
      }

      const codeLatest = item.shifts.at(-1)?.ShiftCode ? item.shifts.at(-1)?.ShiftCode?.Code : "";
      if (codeLatest === "-") continue;
      const latestCount = shiftCodeCount.find(x => x.code === codeLatest);
      const dayIndex = item.shifts.at(-1)!.Workday.Day - 1;

      if (latestCount) {
        latestCount.latest++;
        latestCount.weekdayCount[dayIndex]++;
      } else {
        const newItem: EmployeeShiftCodeCount = { code: codeLatest!, latest: 1, original: 1, totalLatest: 0, weekdayCount: [0,0,0,0,0,0,0] };
        newItem.weekdayCount[dayIndex]++;
        shiftCodeCount.push(newItem);
      }
    }

    // get amount of unique shifts and changed shifts
    const uniqueShiftCount = uniqueShiftsSet.size;
    const changedShiftCount = changedShifts.length;

    const totalCodeCount = shiftCodeCount.reduce((sum, item) => sum + item.latest, 0);
    shiftCodeCount.forEach((item) => {item.totalLatest = totalCodeCount;});

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