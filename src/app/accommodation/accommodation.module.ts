import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccommodationRoutingModule } from './accommodation-routing.module';

import { AccomodationCategoryComponent } from './accomodation-category/accomodation-category.component';
import { AccomodationDetailComponent } from './accomodation-detail/accomodation-detail.component';

import { PTDCCommonModule } from '@app/common/common.module';
import { AccomodationComponent } from './accomodation.component';
import { AccomodationHomeSearchAgodaDetailComponent } from './accomodation-home-search-agoda-detail/accomodation-home-search-agoda-detail.component';
import { CardModule } from '@app/card/card.module';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [
    AccomodationCategoryComponent,
    AccomodationDetailComponent,
    AccomodationComponent,
    AccomodationHomeSearchAgodaDetailComponent,
  ],
  imports: [
    CommonModule,
    AccommodationRoutingModule,
    PTDCCommonModule,
    CardModule,
    CarouselModule.forRoot(),
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
  ],
})
export class AccommodationModule {}
