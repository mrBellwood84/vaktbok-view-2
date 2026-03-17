import { Shift } from "@/models/entities/Shift";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { homeViewSlice, HomeViewState } from "@/store/slices/homeViewSlice";

export const useInitializeHomeView = () => {

  // hooks and actions
  const dispatch = useAppDispatch();
  const { setInitialHomeView } = homeViewSlice.actions;

  const shifts = useAppSelector(state => state.shifts.shifts);

  // values
  const employees = new Set<string>();
  const employeeShifts = new Map<string, Shift[]>();
  let shiftCount = 0;
  let changesCount = 0;
  let noRemarkCount = 0;

  // iterate shifts
  for (const shift of shifts ?? []) {
    const employeeId = shift.Employee.Id;
    const workdayId = shift.Workday.Id;
    const employeeWorkdayId = `${employeeId}_${workdayId}`;

    employees.add(employeeId);

    if (shift.Time) shiftCount++;

    const group = employeeShifts.get(employeeWorkdayId) || [];
    group.push(shift);
    employeeShifts.set(employeeWorkdayId, group);
  }


  for (const [_, value] of employeeShifts) {
    if (value.length > 1) {
      changesCount++;

      const lastRemark = value.at(-1)?.ShiftRemark?.Remark;
      if (!lastRemark) {
        noRemarkCount++;
      }
    }
  }

  const result: HomeViewState = {
    employeeCount: employees.size,
    shiftCount,
    changesCount,
    noRemarkCount,
    loading: false,
  };

  dispatch(setInitialHomeView(result));
};