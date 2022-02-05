import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationCategoryResolveService } from './accomodation-category/accomodation-category-resolve.service';
import { AccomodationCategoryComponent } from './accomodation-category/accomodation-category.component';
import { AccomodationDetailResolveService } from './accomodation-detail/accomodation-detail-resolve.service';
import { AccomodationDetailComponent } from './accomodation-detail/accomodation-detail.component';
import { AccomodationHomeSearchAgodaDetailComponent } from './accomodation-home-search-agoda-detail/accomodation-home-search-agoda-detail.component';
import { AccomodationComponent } from './accomodation.component';

const routes: Routes = [
  { path: '', component: AccomodationComponent },
  {
    path: 'category/:id',
    component: AccomodationCategoryComponent,
    resolve: {
      category: AccomodationCategoryResolveService,
    },
  },
  {
    path: 'category/:category/:id',
    component: AccomodationDetailComponent,
    resolve: {
      room: AccomodationDetailResolveService,
    },
  },
  {
    path: 'location/:slug',
    component: AccomodationHomeSearchAgodaDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccommodationRoutingModule {}
