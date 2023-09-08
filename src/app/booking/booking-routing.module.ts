import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelDetailSearchComponent } from './hotel-search/hotel-detail-search/hotel-detail-search.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { BookingComponent } from './booking.component';

const routes: Routes = [
  { path: '', component: BookingComponent },
  {
    path: 'hotel',
    component: HotelSearchComponent,
  },
  {
    path: 'bus',
    component: BusSearchComponent,
  },
  {
    path: 'flight',
    component: FlightSearchComponent,
  },
  {
    path: 'hotel-detail',
    component: HotelDetailSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
