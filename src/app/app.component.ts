import { Component, OnInit } from '@angular/core';
import { CalendarService } from './@services/calendar.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weekview';

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.calendarService.initCalendarDatabase().subscribe();
  }
}
