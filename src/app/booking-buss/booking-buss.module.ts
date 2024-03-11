import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingBussListingComponent } from './booking-buss-listing/booking-buss-listing.component';
import { BookingBussRoutingModule } from './booking-buss-routing.module';

@NgModule({
  declarations: [BookingBussListingComponent],
  imports: [
    CommonModule,
    BookingBussRoutingModule
  ]
})
export class BookingBussModule { }
