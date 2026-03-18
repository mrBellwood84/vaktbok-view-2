export const MONTHS_NO = [undefined, "Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"] as const;
export const MONTHS_SHORT_NO = [undefined, "Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"] as const;

export type MonthsNo = typeof MONTHS_NO[number];
export type MonthsShortNo = typeof MONTHS_SHORT_NO[number];
