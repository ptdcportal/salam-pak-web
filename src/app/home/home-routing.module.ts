import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { HomeComponent } from './home.component';
// import { Shell } from '@app/shell/shell.service';
// import { WhatToDoComponent } from '@app/event-detail/what-to-do/what-to-do.component';
// import { WhereToGoComponent } from '@app/event-detail/where-to-go/where-to-go.component';
// import { ProfileComponent } from '@app/user/profile/profile.component';
// import { ChangePasswordComponent } from '@app/user/change-password/change-password.component';
// import { AccomodationComponent } from '@app/event-detail/accomodation/accomodation.component';
// import { PlanningComponent } from '@app/planning/planning.component';
// import { TravelItineraryComponent } from '@app/user/travel-itinerary/travel-itinerary.component';
// import { WishlistComponent } from '@app/user/wishlist/wishlist.component';
// import { ReviewFeedbackComponent } from '@app/user/review-feedback/review-feedback.component';
// import { MapComponent } from '@app/event-detail/map/map.component';
// import { DestinationComponent } from '@app/event-detail/destination/destination.component';
// import { LocationResolveService } from '@app/event-detail/location-resolve.service';
// import { CategoryResolveService } from '@app/services/resolver-services/category-resolve.service';
// import { CategoryWhereComponent } from '@app/event-detail/category-where/category-where.component';
// import { MapResolveService } from '@app/event-detail/map/map-resolve.service';
// import { CategoryComponent } from '@app/event-detail/category/category.component';
// import { AccomodationCategoryComponent } from '@app/event-detail/accomodation/accomodation-category/accomodation-category.component';
// import { AccomodationCategoryResolveService } from '@app/event-detail/accomodation/accomodation-category/accomodation-category-resolve.service';
// import { AccomodationDetailComponent } from '@app/event-detail/accomodation/accomodation-detail/accomodation-detail.component';
// import { TripDetailComponent } from '@app/event-detail/trip-detail/trip-detail.component';
// import { TripDetailResolveService } from '@app/services/resolver-services/trip-detail-resolve.service';
import { BlogDetailComponent } from '@app/blog/blog-detail/blog-detail.component';
import { BlogDetailResolveService } from '@app/services/resolver-services/blog-detail-resolve.service';
// import { AccomodationDetailResolveService } from '@app/event-detail/accomodation/accomodation-detail/accomodation-detail-resolve.service';
// import { AccomodationHomeSearchDetailComponent } from '@app/event-detail/accomodation-home-search-detail/accomodation-home-search-detail.component';
// import { AccomodationHomeSearchAgodaDetailComponent } from '@app/event-detail/accomodation-home-search-agoda-detail/accomodation-home-search-agoda-detail.component';
// import { TripsComponent } from '@app/event-detail/trips/trips.component';
// import { TripsResolveService } from '@app/event-detail/trips/trips-resolve.service';
// import { ActivityResolveService } from '@app/event-detail/what-to-do/activity-resolve.service';
import { WinterTripsComponent } from '../home/winter-trips/winter-trips.component';
import { SummerTripsComponent } from '../home/summer-trips/summer-trips.component';
import { FallTripsComponent } from '../home/fall-trips/fall-trips.component';
import { SpringTripsComponent } from '../home/spring-trips/spring-trips.component';
// import { CategoryListingComponent } from '@app/event-detail/category-listing/category-listing.component';
import { ContactComponent } from './contact/contact.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CookieComponent } from './cookie/cookie.component';
import { FaqComponent } from './faq/faq.component';
import { MediaComponent } from './media/media.component';
import { PressComponent } from './press/press.component';
import { SitesearchComponent } from './sitesearch/sitesearch.component';
// import { TripResolveService } from '@app/services/resolver-services/trip-resolve.service';
// import { TripListingComponent } from './trip-listing/trip-listing.component';
// import { EventListingComponent } from './event-listing/event-listing.component';
// import { EventResolveService } from '@app/services/resolver-services/event-resolve.service';
// import { EventDetailResolveService } from '@app/services/resolver-services/event-detail-resolve.service';
// import { EventDetailComponent } from '@app/event-detail/event-detail/event-detail.component';

const routes: Routes = [
  // Shell.childRoutes([
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full', data: { title: extract('Salam Pakistan') } },
  // { path: 'what-to-do', component: WhatToDoComponent },
  // {
  //   path: 'what-to-do/activity/:slug',
  //   component: CategoryComponent,
  //   resolve: {
  //     category: ActivityResolveService,
  //   },
  // },
  // {
  //   path: 'what-to-do/activity/:activity/location/:slug',
  //   component: DestinationComponent,
  //   resolve: {
  //     location: LocationResolveService,
  //   },
  // },

  // {
  //   path: 'where-to-go',
  //   loadChildren: () => import('../where-to-go/where-to-go.module').then((m) => m.WhereToGoModule),
  // },

  // {
  //   path: 'what-to-do',
  //   loadChildren: () => import('../what-to-do/what-to-do.module').then((m) => m.WhatToDoModule),
  // },

  // {
  //   path: 'accomodation',
  //   loadChildren: () => import('../accommodation/accommodation.module').then((m) => m.AccommodationModule),
  // },

  // {
  //   path: 'user',
  //   loadChildren: () => import('../users/users.module').then((m) => m.UsersModule),
  // },

  // {
  //   path: 'planning',
  //   loadChildren: () => import('../planning/planning.module').then((m) => m.PlanningModule),
  // },

  // {
  //   path: 'map',
  //   loadChildren: () => import('../map/map.module').then((m) => m.MapModule),
  // },

  // {
  //   path: 'where-to-go/category/:slug',
  //   component: CategoryWhereComponent,
  //   resolve: {
  //     category: CategoryResolveService,
  //   },
  // },
  // {
  //   path: 'where-to-go/category/:category/location/:slug',
  //   component: DestinationComponent,
  //   resolve: { location: LocationResolveService },
  // },
  // {
  //   path: 'where-to-go/category/:slug/listing',
  //   component: CategoryListingComponent,
  //   resolve: {
  //     category: CategoryResolveService,
  //   },
  // },

  // { path: 'accomodation', component: AccomodationComponent },
  // {
  //   path: 'accomodation/category/:id',
  //   component: AccomodationCategoryComponent,
  //   resolve: {
  //     category: AccomodationCategoryResolveService,
  //   },
  // },
  // {
  //   path: 'accomodation/category/:category/location/:id',
  //   component: AccomodationDetailComponent,
  //   resolve: {
  //     room: AccomodationDetailResolveService,
  //   },
  // },

  // { path: 'planning', component: PlanningComponent },
  // {
  //   path: 'map',
  //   component: MapComponent,
  // },
  // { path: 'map/cities/:slug', component: MapComponent, resolve: { slug: MapResolveService } },
  // { path: 'map/what-to-do/:slug', component: MapComponent, resolve: { slug: MapResolveService } },
  // { path: 'map/where-to-go/:slug', component: MapComponent, resolve: { slug: MapResolveService } },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  // },
  // { path: 'change-password', component: ChangePasswordComponent },
  // { path: 'itinerary', component: TravelItineraryComponent },
  // { path: 'wishlist', component: WishlistComponent },
  // { path: 'reviews', component: ReviewFeedbackComponent },
  // {
  //   path: 'trip-detail/:id/:slug',
  //   component: TripDetailComponent,
  //   resolve: {
  //     trip: TripDetailResolveService,
  //   },
  // },

  // {
  //   path: 'event-detail/:id/:slug',
  //   component: EventDetailComponent,
  //   resolve: {
  //     event: EventDetailResolveService,
  //   },
  // },

  {
    path: 'blog/:slug',
    component: BlogDetailComponent,
    resolve: {
      blog: BlogDetailResolveService,
    },
  },

  // {
  //   path: 'trips/listing',
  //   component: TripListingComponent,
  //   resolve: {
  //     trips: TripResolveService,
  //   },
  // },

  // {
  //   path: 'events/listing',
  //   component: EventListingComponent,
  //   resolve: {
  //     events: EventResolveService,
  //   },
  // },
  // {
  //   path: 'accomodation/location/:slug',
  //   component: AccomodationHomeSearchAgodaDetailComponent,
  // },
  // {
  //   path: 'trips/locations/:slug',
  //   component: TripsComponent,
  //   resolve: {
  //     trip: TripsResolveService,
  //   },
  // },
  {
    path: 'season/winter',
    component: WinterTripsComponent,
  },
  {
    path: 'season/summer',
    component: SummerTripsComponent,
  },
  {
    path: 'season/fall',
    component: FallTripsComponent,
  },
  {
    path: 'season/spring',
    component: SpringTripsComponent,
  },
  {
    path: 'cookie',
    component: CookieComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'media',
    component: MediaComponent,
  },
  {
    path: 'pressrelease',
    component: PressComponent,
  },
  {
    path: 'sitesearch',
    component: SitesearchComponent,
  },
  // ]),
];

// export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
