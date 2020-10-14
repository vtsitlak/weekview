import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/weekview',
  },
  // lazy loading Seasons module
  {
    path: 'weekview',
    loadChildren: () => import('./weekview/weekview.module').then(m => m.WeekviewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
