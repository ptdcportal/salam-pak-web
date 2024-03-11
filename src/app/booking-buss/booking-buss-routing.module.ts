import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingBussListingComponent } from './booking-buss-listing/booking-buss-listing.component';

const routes: Routes = [
  {
    path: '',
    component: BookingBussListingComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BookingBussRoutingModule { }
