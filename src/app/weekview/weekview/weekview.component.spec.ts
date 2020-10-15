import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { WeekviewComponent } from './weekview.component';
import { CalendarService } from '../../@services/calendar.service';
import { CalendarServiceStub } from '../../@testing/calendar-service-stub';
import { WEEK_CALENDAR_MOCK } from '../../@testing/mock-data';

describe('WeekviewComponent', () => {
  let component: WeekviewComponent;
  let fixture: ComponentFixture<WeekviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeekviewComponent],
      providers: [
        { provide: CalendarService, useClass: CalendarServiceStub },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialy get the current weekCalendar and push it on weeksCalendar array from service', fakeAsync(() => {
    component.loadWeekcalendar(0);
    tick(1000);
    fixture.detectChanges();
    expect(component.weeksCalendar[0]).toEqual(WEEK_CALENDAR_MOCK);
  }));
});
