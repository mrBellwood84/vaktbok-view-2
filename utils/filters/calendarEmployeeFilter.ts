import { Shift } from "@/models/entities/Shift";
import { CalendarEmployee } from "@/models/view_model/calendar/CalendarEmployee";

export const calendarEmployeeFilter = (
  shifts: Shift[],
  weekNumber: number,
  year: number,
  haveChanges: boolean,
) => {
  const yearWeekFiltered = filterByWeekAndYear(shifts, weekNumber, year);
  if (!haveChanges) return yearWeekFiltered;
  return filterByBoolean(yearWeekFiltered, haveChanges);
};

// get shifts per week and year
const filterByWeekAndYear = (
  shifts: Shift[],
  weekNumber: number,
  year: number,
) => {
  const result: CalendarEmployee[] = [];

  for (const s of shifts) {
    const validWeek = s.Workday.Week === weekNumber;
    const validYear = s.Workday.Year === year;
    const valid = validYear && validWeek;
    if (!valid) continue;

    const inResult = result.find(x => x.employeeId == s.Employee.Id);
    if (inResult) {
      inResult.shifts.push(s);
      continue;
    }

    result.push({
      employeeId: s.Employee.Id,
      employeeName: s.Employee.Name,
      shifts: [ s ],
    });
  }

  return result;
};

const filterByBoolean = (calendarEmployees: CalendarEmployee[], haveChanges: boolean) => {
  
  return calendarEmployees.filter(x => {
    if (haveChanges) {
      if (checkNoChange(x.shifts)) return false;
    }
    return true;
  });
};

const checkNoChange = (shifts: Shift[]) => {
  const workdayIdSet = new Set<string>();
  shifts.forEach(s => workdayIdSet.add(s.Workday.Id));
  return shifts.length === workdayIdSet.size;
};
