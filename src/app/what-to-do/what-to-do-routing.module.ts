import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from '@app/destination/destination.component';
import { CategoryResolveService } from '@app/services/resolver-services/category-resolve.service';
import { LocationResolveService } from '../services/resolver-services/location-resolve.service';

import { CategoryComponent } from './category/category.component';
import { ListingComponent } from './listing/listing.component';
// import { DestinationComponent } from './destination/destination.component';
import { ActivityResolveService } from './what-to-do/activity-resolve.service';
import { WhatToDoComponent } from './what-to-do/what-to-do.component';

const routes: Routes = [
  { path: '', component: WhatToDoComponent },
  {
    path: 'activity/:slug',
    component: CategoryComponent,
    resolve: {
      category: ActivityResolveService,
    },
  },
  {
    path: 'activity/:activity/location/:slug',
    component: DestinationComponent,
    resolve: {
      location: LocationResolveService,
    },
  },

  {
    path: 'activity/:slug/listing',
    component: ListingComponent,
    resolve: {
      activity: ActivityResolveService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatToDoRoutingModule {}
