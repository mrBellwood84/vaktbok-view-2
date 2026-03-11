import { Employee } from "@/models/entities/Employee";
import { FilePath } from "@/models/entities/FilePath";
import { ShiftCode } from "@/models/entities/ShiftCode";
import { ShiftRemark } from "@/models/entities/ShiftRemark";
import { Workday } from "@/models/entities/Workday";

export interface Shift {
  Id: string;
  Time: string;
  CreatedAt: string;
  Employee: Employee;
  Workday: Workday;
  ShiftCode?: ShiftCode;
  ShiftRemark?: ShiftRemark;
  FilePath?: FilePath;
}