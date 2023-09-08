import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
// import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { HomeService } from '../services/home.service';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeWeatherComponent } from './home-weather/home-weather.component';
import { FilteredComponent } from './filtered/filtered.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { PressComponent } from './press/press.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { SeasonalTripsComponent } from './seasonal-trips/seasonal-trips.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { FeaturedTripsComponent } from './featured-trips/featured-trips.component';
import { VisaStatusComponent } from './visa-status/visa-status.component';
import { PTDCCommonModule } from '@app/common/common.module';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeEventsComponent } from './home-events/home-events.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { NgxPaginationModule } from 'ngx-pagination';
// import { TripListingComponent } from '../trip/trip-listing/trip-listing.component';
// import { EventListingComponent } from './event-listing/event-listing.component';
import { SummerTripsComponent } from './summer-trips/summer-trips.component';
import { WinterTripsComponent } from './winter-trips/winter-trips.component';
import { SpringTripsComponent } from './spring-trips/spring-trips.component';
import { FallTripsComponent } from './fall-trips/fall-trips.component';

import { CreatePlanComponent } from '../planning-popups/create-plan/create-plan.component';
import { PlanListingComponent } from '../planning-popups/plan-listing/plan-listing.component';

// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { NgxSmartModalModule } from 'ngx-smart-modal';
// import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { TextMaskModule } from 'angular2-text-mask';
@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    TranslateModule,
    CarouselModule.forRoot(),
    // CoreModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule,
    PTDCCommonModule,
    BsDatepickerModule.forRoot(),
    NgxPaginationModule,
    // SlickCarouselModule,
    // NgxSmartModalModule.forRoot(),
    // TypeaheadModule,
    // NgbModule,
    // TextMaskModule,
  ],
  declarations: [
    HomeComponent,
    HomeSliderComponent,
    HomeWeatherComponent,
    FilteredComponent,
    BlogComponent,
    FooterNavComponent,
    SeasonalTripsComponent,
    HomeVideoComponent,
    BookingDetailsComponent,
    FeaturedTripsComponent,
    VisaStatusComponent,
    ContactComponent,
    MediaComponent,
    PressComponent,
    HomeEventsComponent,
    // TripListingComponent,
    // EventListingComponent,
    SummerTripsComponent,
    WinterTripsComponent,
    SpringTripsComponent,
    FallTripsComponent,
    CreatePlanComponent,
    PlanListingComponent,
  ],
  providers: [],
})
export class HomeModule {}
