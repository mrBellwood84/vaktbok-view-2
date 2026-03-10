export interface Shift_FlatModel {
  // Shift
  shiftId: string;
  shiftEmployeeId: string;
  shiftWorkdayId: string;
  shiftShiftCodeId: string | null;
  shiftShiftRemarkId: string | null;
  shiftFilePathId: string | null;
  shiftTime: string;
  shiftCreatedAt: string;
  // Employee
  employeeId: string;
  employeeName: string;
  employeeCreatedAt: string;

  // Workday
  workdayId: string;
  workdayDay: number;
  workdayWeek: number;
  workdayYear: number;
  workdayDate: string; //
  workdayCreatedAt: string;

  // ShiftCode
  shiftCodeId: string | null;
  shiftCodeCode: string | null;
  shiftCodeCreatedAt: string | null;

  // ShiftRemark
  shiftRemarkId: string | null;
  shiftRemarkRemark: string | null;
  shiftRemarkCreatedAt: string | null;

  // FilePath
  filePathId: string | null;
  filePathPath: string | null;
  filePathCreatedAt: string | null;
}