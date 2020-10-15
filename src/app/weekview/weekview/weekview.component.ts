import { Component, OnInit } from '@angular/core';
import { WeekCalendar } from '../../@interfaces/week-calendar';
import { CalendarService } from '../../@services/calendar.service';

@Component({
  selector: 'app-weekview',
  templateUrl: './weekview.component.html',
  styleUrls: ['./weekview.component.scss']
})
export class WeekviewComponent implements OnInit {

  weekNr = 0;
  weeksCalendar: WeekCalendar[] = [];
  selectedWeekIndex: number;
  loading: boolean;

  constructor( private calendarService: CalendarService) { }

  ngOnInit(): void {

    // load current week calendar
    this.loadWeekcalendar(this.weekNr);
  }

  loadWeekcalendar(weekNr: number): void {
    this.loading = true;

    this.calendarService.getWeekCalendar(weekNr.toString())
    .subscribe(weekCalendar => {
      this.weeksCalendar.push(weekCalendar);
      this.selectedWeekIndex = this.weeksCalendar.map(wc => wc.week).indexOf(weekNr.toString());
      this.loading = false;
    } );
  }

  weekNavigate(weekNavigate: number): void {
    this.weekNr += weekNavigate;
    const index = this.weeksCalendar.map(wc => wc.week).indexOf(this.weekNr.toString());

    // if week calendar not exit genarate a new week calendar and store it
    if (index > -1) {
      this.selectedWeekIndex = index;
    } else {
      const weekCalendar: WeekCalendar = this.calendarService.generateWeekCalendar(this.weekNr);
      this.weeksCalendar.push(weekCalendar);
      this.selectedWeekIndex = this.weeksCalendar.map(wc => wc.week).indexOf(this.weekNr.toString());
      this.calendarService.setCalendarWeek(this.weekNr.toString(), weekCalendar).subscribe();
    }
  }

}
