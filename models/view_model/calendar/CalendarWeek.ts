import { Workday } from "@/models/entities/Workday";

export interface CalendarWeek {
  week: number;
  year: number;
  workdays: Workday[];
}