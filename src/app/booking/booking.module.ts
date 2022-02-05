import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';

import { PTDCCommonModule } from '@app/common/common.module';
import { BookingComponent } from './booking.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelDetailSearchComponent } from './hotel-search/hotel-detail-search/hotel-detail-search.component';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { CardModule } from '@app/card/card.module';
import { SharedModule } from '@shared';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaymentComponent } from './payment/payment.component';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [
    BookingComponent,
    HotelSearchComponent,
    BusSearchComponent,
    FlightSearchComponent,
    HotelDetailSearchComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    PTDCCommonModule,
    CardModule,
    SharedModule,
    CarouselModule.forRoot(),
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
  ],
})
export class BookingModule {}
