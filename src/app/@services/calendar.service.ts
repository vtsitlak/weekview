import { Injectable } from '@angular/core';
import { CalendarItem } from '../@interfaces/calendar-item';
import * as moment from 'moment';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const TITLES = [
  'work meeting', 'call', 'gym', 'doctor', 'Dutch lesson', 'visit', 'dentist', 'wallk the dog', 'supermarket', 'agile training'
];

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private storage: StorageMap) { }

  initCalendarDatabase(): Observable<any> {
    // generate 30 calendar items and return an observable method to store them into a indexedDb localstorage

    const calendarItems: CalendarItem[] = [];
    for (let i = 0; i < 30; i++) {
      const calendarItem = this.generateCalendarItem();
      calendarItems.push(calendarItem);
    }

    return this.storage.set('calendar', calendarItems);
  }

  getCalendarItems(): Observable<CalendarItem[]> {

    return this.storage.get('calendar').pipe(
      map(calendarItems => calendarItems as CalendarItem[]),
    );
  }

  private generateCalendarItem(): CalendarItem {

    return {
      title: TITLES[Math.floor(Math.random() * 10)],
      date: this.generateCalendarDate(),
      // duration returns 15 to 120 minutes on steps of 15 minutes
      duration: 15 * (Math.floor(Math.random() * 8) + 1) + ' minutes',
    };
  }

  // return a random date between last, current or next week
  private generateCalendarDate(): string {

    let date = moment();
    const dayRange = Math.floor(Math.random() * 7);
    const week = Math.floor(Math.random() * 3);
    if (week === 0) {
      date = date.subtract(dayRange, 'd');
    } else if (week === 1) {
      date = date.add(dayRange, 'd');
    } else {
      date = date.add(dayRange + 7, 'd');
    }

    return date.format('DD-MM-YYYY');
  }


}
