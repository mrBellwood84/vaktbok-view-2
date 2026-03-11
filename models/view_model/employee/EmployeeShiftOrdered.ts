import { Shift } from "@/models/entities/Shift";

export interface EmployeeShiftOrdered {
  date: string,
  shifts: Shift[],
}