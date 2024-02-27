import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingAirlineListingComponent } from './booking-airline-listing/booking-airline-listing.component';
import { BookingAirlineRoutingModule } from './booking-airline-routing.module';



@NgModule({
  declarations: [BookingAirlineListingComponent],
  imports: [
    CommonModule,
    BookingAirlineRoutingModule
  ]
})
export class BookingAirlineModule { }
