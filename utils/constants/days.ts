
export const WEEKDAYS_NO = [undefined, "Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag"] as const;

export type WeekdayNo = typeof WEEKDAYS_NO[number];