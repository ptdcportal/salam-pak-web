import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingModuleListingComponent } from './booking-module-listing/booking-module-listing.component';

const routes: Routes = [
  {
    path: '',
    component: BookingModuleListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingModuleRoutingModule { }
