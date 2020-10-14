import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekviewComponent } from './weekview/weekview.component';
import { WeekviewRoutingModule } from './weekview-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WeekviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    WeekviewRoutingModule,
  ]
})
export class WeekviewModule { }
