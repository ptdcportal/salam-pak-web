import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanResolveService } from '@app/services/resolver-services/plan-resolve.service';
import { PlanListingComponent } from './plan-listing/plan-listing.component';
import { PlanningComponent } from './planning.component';
import { PlanCovidComponent } from './plan-covid/plan-covid.component';
import { PlanGettingArroundComponent } from './plan-getting-arround/plan-getting-arround.component';
import { PlanGettingHereComponent } from './plan-getting-here/plan-getting-here.component';
import { PlanTipsComponent } from './plan-tips/plan-tips.component';
import { PlanTravelComponent } from './plan-travel/plan-travel.component';
import { PlanVisaComponent } from './plan-visa/plan-visa.component';
import { PlanTicComponent } from './plan-tic/plan-tic.component';

const routes: Routes = [
  { path: 'listing', component: PlanListingComponent },
  {
    path: ':planId/details',
    resolve: {
      planDetails: PlanResolveService,
    },
    component: PlanningComponent,
  },
  { path: 'covid', component: PlanCovidComponent },
  { path: 'getting-around', component: PlanGettingArroundComponent },
  { path: 'getting-here', component: PlanGettingHereComponent },
  { path: 'tips', component: PlanTipsComponent },
  { path: 'travel', component: PlanTravelComponent },
  { path: 'visa', component: PlanVisaComponent },
  { path: 'tic', component: PlanTicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanningRoutingModule {}
