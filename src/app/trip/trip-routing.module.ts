import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripDetailResolveService } from '@app/services/resolver-services/trip-detail-resolve.service';
import { TripResolveService } from '@app/services/resolver-services/trip-resolve.service';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';

const routes: Routes = [
  {
    path: 'detail/:id/:slug',
    resolve: {
      trip: TripDetailResolveService,
    },
    component: TripDetailComponent,
  },
  {
    path: 'listing',
    resolve: {
      trips: TripResolveService,
    },
    component: TripListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TripRoutingModule {}
