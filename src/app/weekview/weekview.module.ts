import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekviewComponent } from './weekview/weekview.component';
import { WeekviewRoutingModule } from './weekview-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WeekSelectorComponent } from './weekview/week-selector/week-selector.component';
import { CalendarComponent } from './weekview/calendar/calendar.component';

@NgModule({
  declarations: [WeekviewComponent, WeekSelectorComponent, CalendarComponent],
  imports: [
    CommonModule,
    SharedModule,
    WeekviewRoutingModule,
  ]
})
export class WeekviewModule { }
