import { Shift } from "@/models/entities/Shift";

export interface CalendarEmployee {
  employeeId: string;
  employeeName: string;
  shifts: Shift[];
}