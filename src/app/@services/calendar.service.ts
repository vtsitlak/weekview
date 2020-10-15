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

  setCalendarWeek(week: string, weekCalendar: CalendarItem[][]): Observable<any> {

    // return an observable method to store a calendar for a week into a indexedDb localstorage
    return this.storage.set(week, weekCalendar);
  }

  getCalendarItems(week: string): Observable<CalendarItem[]> {

    return this.storage.get(week).pipe(
      map(calendarItems => calendarItems as CalendarItem[]),
    );
  }

  generateWeekCalendar(weekNr: number): CalendarItem[][] {

    // generate and return 0 to 3 random calendar items per day for a week
    const weekCalendar: CalendarItem[][] = [];
    let date = moment();

    if (weekNr >= 0) {
      date = date.add(weekNr, 'week');
    } else {
      const weekNrAbsolute = weekNr * -1;
      date = date.subtract(weekNrAbsolute, 'week');
    }

    for (let i = 0; i < 7; i++) {
      let dateOfWeek = date.clone();
      dateOfWeek = dateOfWeek.add(i, 'd');
      const calendarItems: CalendarItem[] = [];
      const nrOfItems = Math.floor(Math.random() * 4);

      for (let y = 0; y < nrOfItems; y++) {
        let dateOfItem = dateOfWeek.clone();

        const hour = (Math.floor(Math.random() * 24));

        dateOfItem = dateOfItem.set('hour', hour).set('minute', 0);

        const calendarItem: CalendarItem = {
          title: TITLES[Math.floor(Math.random() * 10)],
          date: dateOfItem.format('DD-MM-YYYY hh:mm'),
          // duration 1 or 2 hours
          duration: (Math.floor(Math.random() * 2) + 1).toString(),
        };
        calendarItems.push(calendarItem);
      }

      weekCalendar[i] = calendarItems;
    }

    return weekCalendar;
  }

}
