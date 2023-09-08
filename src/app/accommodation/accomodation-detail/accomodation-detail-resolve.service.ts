import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '@app/services/event.service';
@Injectable({
  providedIn: 'root',
})
export class AccomodationDetailResolveService {
  constructor(private readonly eventService: EventService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.eventService.getRoomDetail(route.params.id);
  }
}
