import { Observable, of } from 'rxjs';
import { WeekCalendar } from '../@interfaces/week-calendar';
import { WEEK_CALENDAR_MOCK } from './mock-data';

export class CalendarServiceStub {

  getWeekCalendar(week: string): Observable<WeekCalendar> {
    return of(WEEK_CALENDAR_MOCK);
  }
}
