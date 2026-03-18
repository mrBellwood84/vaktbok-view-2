
export const WEEKDAYS_NO = [undefined, "Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag"] as const;
export const WEEKDAYS_SHORT_NO = [undefined, "M","T","O","T","F","L","S"] as const;

export type WeekdayNo = typeof WEEKDAYS_NO[number];
export type WeekdayShortNo = typeof WEEKDAYS_SHORT_NO[number];