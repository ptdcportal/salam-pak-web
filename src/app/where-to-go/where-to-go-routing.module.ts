import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from '@app/destination/destination.component';
import { CategoryResolveService } from '../services/resolver-services/category-resolve.service';

import { LocationResolveService } from '../services/resolver-services/location-resolve.service';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { CategoryWhereComponent } from './category-where/category-where.component';

import { TripsResolveService } from './trips/trips-resolve.service';
import { TripsComponent } from './trips/trips.component';

import { WhereToGoComponent } from './where-to-go.component';

const routes: Routes = [
  { path: '', component: WhereToGoComponent },

  {
    path: 'category/:slug',
    component: CategoryWhereComponent,
    resolve: {
      category: CategoryResolveService,
    },
  },

  {
    path: 'category/:slug/listing',
    component: CategoryListingComponent,
    resolve: {
      category: CategoryResolveService,
    },
  },

  {
    path: 'location/:slug/listing',
    component: CategoryListingComponent,
    resolve: {
      location: LocationResolveService,
    },
  },

  {
    path: 'category/:category/location/:slug',
    component: DestinationComponent,
    resolve: { location: LocationResolveService },
  },

  {
    path: 'locations/:slug',
    component: TripsComponent,
    resolve: {
      trip: TripsResolveService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhereToGoRoutingModule {}
