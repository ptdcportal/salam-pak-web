import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgxSmartModalModule } from 'ngx-smart-modal';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AuthModule } from '@app/auth';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { WhatToDoComponent } from './event-detail/what-to-do/what-to-do.component';
// import { WhereToGoComponent } from './event-detail/where-to-go/where-to-go.component';
// import { ProfileComponent } from './user/profile/profile.component';
// import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// import { AccomodationComponent } from './event-detail/accomodation/accomodation.component';
// import { PlanningComponent } from './planning/planning.component';
// import { TravelItineraryComponent } from './user/travel-itinerary/travel-itinerary.component';
// import { WishlistComponent } from './user/wishlist/wishlist.component';
// import { ReviewFeedbackComponent } from './user/review-feedback/review-feedback.component';
// import { MapComponent } from './event-detail/map/map.component';
// import { DestinationComponent } from './event-detail/destination/destination.component';
// import { CategoryWhereComponent } from './event-detail/category-where/category-where.component';
// import { NgbPaginationModule, NgbAlertModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
// import { GoogleMapsModule } from '@angular/google-maps';
// import { CategoryComponent } from './event-detail/category/category.component';
// import { TextMaskModule } from 'angular2-text-mask';
// import { NgxPaginationModule } from 'ngx-pagination';
import { SitesearchComponent } from './home/sitesearch/sitesearch.component';
// import { AgmCoreModule } from '@agm/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// import { UserSidebarComponent } from './user/user-sidebar/user-sidebar.component';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { AccomodationCategoryComponent } from './event-detail/accomodation/accomodation-category/accomodation-category.component';
// import { AccomodationDetailComponent } from './event-detail/accomodation/accomodation-detail/accomodation-detail.component';
// import { SortableModule } from 'ngx-bootstrap/sortable';
// import { TripDetailComponent } from './event-detail/trip-detail/trip-detail.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
// import { AccomodationHomeSearchDetailComponent } from './event-detail/accomodation-home-search-detail/accomodation-home-search-detail.component';
// import { AccomodationHomeSearchAgodaDetailComponent } from './event-detail/accomodation-home-search-agoda-detail/accomodation-home-search-agoda-detail.component';
// import { TripsComponent } from './event-detail/trips/trips.component';
// import { WinterTripsComponent } from './event-detail/winter-trips/winter-trips.component';
// import { SummerTripsComponent } from './event-detail/summer-trips/summer-trips.component';
// import { FallTripsComponent } from './event-detail/fall-trips/fall-trips.component';
// import { SpringTripsComponent } from './event-detail/spring-trips/spring-trips.component';

// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { ShareIconsModule } from 'ngx-sharebuttons/icons';
// import { CategoryListingComponent } from './event-detail/category-listing/category-listing.component';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { BookingModuleListingComponent } from './booking-module/booking-module-listing/booking-module-listing.component';

@NgModule({
  imports: [
    // ShareButtonsModule.withConfig({
    //   debug: true,
    // }),
    // ShareIconsModule,
    SocialLoginModule,
    BrowserModule,
    // NgxPaginationModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),
    // FormsModule,
    HttpClientModule,
    // ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    AuthModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    AppComponent,
    // WhatToDoComponent,
    // WhereToGoComponent,
    // ProfileComponent,
    // ChangePasswordComponent,
    // AccomodationComponent,
    // PlanningComponent,
    // TravelItineraryComponent,
    // WishlistComponent,
    // ReviewFeedbackComponent,
    // MapComponent,
    // DestinationComponent,
    // CategoryWhereComponent,
    // CategoryComponent,
    // UserSidebarComponent,
    // AccomodationCategoryComponent,
    // AccomodationDetailComponent,
    // TripDetailComponent,
    BlogDetailComponent,
    // AccomodationHomeSearchDetailComponent,
    // AccomodationHomeSearchAgodaDetailComponent,
    // TripsComponent,
    // WinterTripsComponent,
    // SummerTripsComponent,
    // FallTripsComponent,
    // SpringTripsComponent,
    // CategoryListingComponent,
    SitesearchComponent,
    // BookingModuleListingComponent,
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '933388252404-7nqjar8f9v05v1bff2amjl5a7j882gnt.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('3509076755872961'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {}
