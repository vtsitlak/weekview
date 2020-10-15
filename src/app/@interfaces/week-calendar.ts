import { CalendarItem } from "./calendar-item";

export interface WeekCalendar {
  week: string;
  calendarItems: CalendarItem[][];
}
