import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModuleListingComponent } from './booking-module-listing/booking-module-listing.component';
import { BookingModuleRoutingModule } from './booking-module-routing.module';

@NgModule({
  declarations: [BookingModuleListingComponent],
  imports: [
    CommonModule,
    BookingModuleRoutingModule
  ]
})
export class BookingModuleModule { }
