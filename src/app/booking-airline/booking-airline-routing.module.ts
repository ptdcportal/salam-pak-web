import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingAirlineListingComponent } from './booking-airline-listing/booking-airline-listing.component';


const routes: Routes = [
  {
    path: '',
    component: BookingAirlineListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingAirlineRoutingModule { }
