import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventDetailResolveService } from '@app/services/resolver-services/event-detail-resolve.service';
import { EventResolveService } from '@app/services/resolver-services/event-resolve.service';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  {
    path: 'listing',
    component: EventListingComponent,
    resolve: {
      events: EventResolveService,
    },
  },

  {
    path: 'detail/:id/:slug',
    component: EventDetailComponent,
    resolve: {
      event: EventDetailResolveService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class EventDetailRoutingModule {}
