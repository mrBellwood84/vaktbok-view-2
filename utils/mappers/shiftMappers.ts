import { Shift } from "@/models/entities/Shift";
import { Shift_FlatModel } from "@/models/entities/Shift_FlatModel";

export const mapFlatShiftData = (flatData: Shift_FlatModel[]) => {

  const result: Shift[] = flatData.map(d => {
    return {
      id: d.shiftId,
      time: d.shiftTime,
      createdAt: d.shiftCreatedAt,
      employee: {
        Id: d.employeeId,
        Name: d.employeeName,
        CreatedAt: d.employeeCreatedAt,
      },
      workday: {
        id: d.workdayId,
        day: d.workdayDay,
        week: d.workdayWeek,
        year: d.workdayYear,
        date: d.workdayDate,
        createdAt: d.workdayCreatedAt,
      },
      shiftCode: d.shiftShiftCodeId ? {
        id: d.shiftCodeId!,
        code: d.shiftCodeCode!,
        createdAt: d.shiftCodeCreatedAt!,
      } : undefined,
      shiftRemark: d.shiftShiftRemarkId ? {
        id: d.shiftRemarkId!,
        remark: d.shiftRemarkRemark!,
        createdAt: d.shiftRemarkCreatedAt!,
      } : undefined,
      filePath: d.shiftFilePathId ? {
        id: d.filePathId!,
        path: d.filePathPath!,
        createdAt: d.filePathCreatedAt!,
      } : undefined,
    };
  });

  return result;
};