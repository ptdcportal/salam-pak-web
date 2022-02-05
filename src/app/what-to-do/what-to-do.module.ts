import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatToDoRoutingModule } from './what-to-do-routing.module';
import { WhatToDoComponent } from './what-to-do/what-to-do.component';
import { CategoryComponent } from './category/category.component';

import { AgmCoreModule } from '@agm/core';
import { PTDCCommonModule } from '../common/common.module';
import { DestinationModule } from '@app/destination/destination.module';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  declarations: [WhatToDoComponent, CategoryComponent, ListingComponent],
  imports: [
    CommonModule,
    PTDCCommonModule,
    WhatToDoRoutingModule,
    DestinationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPhOFre2UhYgZPRNw_qD8CaGQ36pUqaQA',
    }),
  ],
})
export class WhatToDoModule {}
