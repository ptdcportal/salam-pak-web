import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';
@Injectable({
  providedIn: 'root',
})
export class BlogDetailResolveService {
  constructor(private readonly homeService: HomeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.homeService.getSingleBlog(route.params.slug);
  }
}
