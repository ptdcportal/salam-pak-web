import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../event.service';
@Injectable({
  providedIn: 'root',
})
export class CategoryResolveService {
  constructor(private readonly eventService: EventService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getCategoryDetail(route.params.slug);
  }
}
