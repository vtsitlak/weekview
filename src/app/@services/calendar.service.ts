import { Injectable } from '@angular/core';
import { CalendarItem } from '../@interfaces/calendar-item';
import * as moment from 'moment';

const TITLES = [
  'work meeting', 'call', 'gym', 'doctor', 'Dutch lesson', 'visit', 'dentist', 'wallk the dog', 'supermarket', 'agile training'
];

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  private generateCalendarItem(): CalendarItem {

    return {
      title: TITLES[Math.floor(Math.random() * 9)],
      date: this.generateCalendarDate(),
      // duration returns 15 to 120 minutes on steps of 15 minutes
      duration: (Math.floor(Math.random() * 15) + 1) * (Math.floor(Math.random() * 8) + 1) + ' minutes',
    };
  }

  // return a random date between last, current or next week
  private generateCalendarDate(): string {

    let date = '';
    const today = moment();
    const dayRange = Math.floor(Math.random() * 6);
    const week = Math.floor(Math.random() * 2);
    if (week === 0) {
      date = today.subtract(dayRange, 'd').calendar();
    } else if (week === 1) {
      date = today.add(dayRange, 'd').calendar();
    } else {
      today.add(dayRange + 7, 'd').calendar();
    }

    return date;
  }


}
