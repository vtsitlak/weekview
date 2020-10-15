import { TestBed } from '@angular/core/testing';
import { CalendarService } from './calendar.service';
import { WeekCalendar } from '../@interfaces/week-calendar';


describe('CalendarService', () => {
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('generateWeekCalendar should return a WeekCalendar with 7 CalendarItem Arrays', () => {
    const weekCalendar: WeekCalendar = service.generateWeekCalendar(0);
    expect(weekCalendar.calendarItems.length).toBe(7);
  });

});
