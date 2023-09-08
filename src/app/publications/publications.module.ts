import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { PublicationListingComponent } from './publication-listing/publication-listing.component';

@NgModule({
  declarations: [PublicationListingComponent],
  imports: [CommonModule, PublicationsRoutingModule],
})
export class PublicationsModule {}
