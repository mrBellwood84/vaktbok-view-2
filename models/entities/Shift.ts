import { Employee } from "@/models/entities/Employee";
import { FilePath } from "@/models/entities/FilePath";
import { ShiftCode } from "@/models/entities/ShiftCode";
import { ShiftRemark } from "@/models/entities/ShiftRemark";
import { Workday } from "@/models/entities/Workday";

export interface Shift {
  id: string;
  time: string;
  createdAt: string;
  employee: Employee;
  workday: Workday;
  shiftCode?: ShiftCode;
  shiftRemark?: ShiftRemark;
  filePath?: FilePath;
}