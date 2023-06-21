import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../../services/event.service';
@Injectable({
  providedIn: 'root',
})
export class MapResolveService {
  constructor(private readonly eventService: EventService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getLocationDetail(route.params.slug);
  }
}
