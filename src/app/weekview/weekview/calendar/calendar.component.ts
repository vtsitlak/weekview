import { Component, Input, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { WeekCalendar } from '../../../@interfaces/week-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnChanges {

  hours: string[] = [...Array(24).keys()].map(hour => moment({
    hour,
    minutes: 0,
  }).format('HH:mm'));

  labels: string[];
  titles: any[];

  @Input() weekCalendar: WeekCalendar;

  constructor() { }

  ngOnChanges(): void {
    this.labels = [];
    this.titles = [];

    this.setLabels();
    this.setTitles();
  }

  setLabels(): void {
    this.labels.push('Hour / Date');
    this.weekCalendar.calendarItems.forEach(calendarItem => this.labels.push(calendarItem[0].date.substring(0, 10)));
  }

  setTitles(): void {
    let indexHours = 0;
    let indexDay = 0;

    const titles = [...Array(24 * 8).keys()].map(key => (key % 8 === 0) ? '' : {});

    this.hours.forEach(hour => {
      titles[indexHours * 8] = hour;
      indexHours++;
    });

    this.weekCalendar.calendarItems.forEach(calendarItems => {
      calendarItems.forEach(item => {
        const indexOnTitles = titles.map(title => title).indexOf(item.date.substring(11));

        if (indexOnTitles > -1) {
          titles[indexOnTitles + indexDay + 1] = item;
        }
      });
      indexDay++;
    });

    this.titles = [...titles];
  }

}
