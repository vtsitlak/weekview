import { Component, Input, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { WeekCalendar } from '../../../@interfaces/week-calendar';
import { CalendarItem } from '../../../@interfaces/calendar-item';
import { title } from 'process';

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
  items: any[];

  @Input() weekCalendar: WeekCalendar;

  constructor() { }

  ngOnChanges(): void {
    this.labels = [];
    this.items = [];

    this.setLabels();
    this.setItems();
  }

  setLabels(): void {
    this.labels.push('Hour / Date');
    this.weekCalendar.calendarItems.forEach(calendarItem => this.labels.push(calendarItem[0].date.substring(0, 10)));
  }

  setItems(): void {
    let indexHours = 0;
    let indexDay = 0;

    const items = [...Array(24 * 8).keys()].map(key => (key % 8 === 0) ? '' : {});

    this.hours.forEach(hour => {
      items[indexHours * 8] = hour;
      indexHours++;
    });

    this.weekCalendar.calendarItems.forEach(calendarItems => {
      calendarItems.forEach(calendarItem => {
        const indexOnTitles = items.map(i => i).indexOf(calendarItem.date.substring(11));

        if (indexOnTitles > -1) {
          items[indexOnTitles + indexDay + 1] = calendarItem;
        }
      });
      indexDay++;
    });

    this.items = [...items];
  }

  isEvent(item: any, index: number): boolean {

    return (item && item.title) || this.isDuration2(index);
  }

  isDuration2(index: number): boolean {

    return (index > 8 && this.items[index - 8] && this.items[index - 8].duration === '2');
  }

}
