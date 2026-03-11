import { Shift } from "@/models/entities/Shift";
import { Shift_FlatModel } from "@/models/entities/Shift_FlatModel";

export const mapFlatShiftData = (flatData: Shift_FlatModel[]) => {

  const result: Shift[] = flatData.map(d => {
    return {
      Id: d.shiftId,
      Time: d.shiftTime,
      CreatedAt: d.shiftCreatedAt,
      Employee: {
        Id: d.employeeId,
        Name: d.employeeName,
        CreatedAt: d.employeeCreatedAt,
      },
      Workday: {
        Id: d.workdayId,
        Day: d.workdayDay,
        Week: d.workdayWeek,
        Year: d.workdayYear,
        Date: d.workdayDate,
        CreatedAt: d.workdayCreatedAt,
      },
      ShiftCode: d.shiftShiftCodeId ? {
        Id: d.shiftCodeId!,
        Code: d.shiftCodeCode!,
        CreatedAt: d.shiftCodeCreatedAt!,
      } : undefined,
      ShiftRemark: d.shiftShiftRemarkId ? {
        Id: d.shiftRemarkId!,
        Remark: d.shiftRemarkRemark!,
        CreatedAt: d.shiftRemarkCreatedAt!,
      } : undefined,
      FilePath: d.shiftFilePathId ? {
        Id: d.filePathId!,
        Path: d.filePathPath!,
        CreatedAt: d.filePathCreatedAt!,
      } : undefined,
    };
  });

  return result;
};