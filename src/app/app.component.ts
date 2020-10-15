import { Component } from '@angular/core';
import { CalendarService } from './@services/calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weekview';

  constructor(private calendarService: CalendarService) {
    // init db with current week
    const week = 0;
    const currentWeekCalendar = this.calendarService.generateWeekCalendar(week);
    this.calendarService.setCalendarWeek(week.toString(), currentWeekCalendar).subscribe();
  }
}
