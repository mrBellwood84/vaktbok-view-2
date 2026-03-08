import {Employee} from "@/models/entities/Employee";
import {Workday} from "@/models/entities/Workday";
import {ShiftCode} from "@/models/entities/ShiftCode";
import {ShiftRemark} from "@/models/entities/ShiftRemark";
import {FilePath} from "@/models/entities/FilePath";

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