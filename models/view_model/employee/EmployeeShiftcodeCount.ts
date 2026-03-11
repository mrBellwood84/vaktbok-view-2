export interface EmployeeShiftCodeCount {
  code: string;
  original: number;
  latest: number;
  totalLatest: number;
  weekdayCount: number[];
}