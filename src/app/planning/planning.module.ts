import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningComponent } from './planning.component';

import { SortableModule } from 'ngx-bootstrap/sortable';

import { AgmCoreModule } from '@agm/core';
import { PTDCCommonModule } from '@app/common/common.module';
import { PlanListingComponent } from './plan-listing/plan-listing.component';

@NgModule({
  declarations: [PlanningComponent, PlanListingComponent],
  imports: [
    CommonModule,
    PTDCCommonModule,
    SortableModule,
    PlanningRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPhOFre2UhYgZPRNw_qD8CaGQ36pUqaQA',
    }),
  ],
})
export class PlanningModule {}
