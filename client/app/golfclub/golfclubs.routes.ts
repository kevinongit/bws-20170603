import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GolfclubsComponent }    from './golfclubs.component';
import { GolfclubsDetailComponent }  from './golfclubs-detail.component';
const golfclubsRoutes: Routes = [
  { path: 'golfclubs',  component: GolfclubsComponent },
  { path: 'golfclub/:_id', component: GolfclubsDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(golfclubsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GolfclubsRoutes { }
