import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WeekviewComponent } from './weekview/weekview.component';

const routes: Routes = [
  {
    path: '',
    component: WeekviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekviewRoutingModule {
}
