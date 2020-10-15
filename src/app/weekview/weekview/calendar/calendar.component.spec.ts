import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import { SharedModule } from '../../../shared/shared.module';
import { ComponentFactoryResolver } from '@angular/core';
import { WEEK_CALENDAR_MOCK } from '../../../@testing/mock-data';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent],
      imports: [SharedModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an labels array with length 8 and an items array with length 192', () => {
    component.weekCalendar = WEEK_CALENDAR_MOCK;
    component.ngOnChanges();
    expect(component.labels.length).toBe(8);
    expect(component.items.length).toBe(192);
  });

  it('isEvent should find if an item as an event', () => {
    component.weekCalendar = WEEK_CALENDAR_MOCK;
    component.ngOnChanges();
    const items = component.items;
    const index = component.items.map(item => item && item.duration).indexOf('2');
    expect(component.isEvent(items[0], 0)).toBe(false);
    expect(component.isEvent(items[index], 0)).toBe(true);
  });
});
