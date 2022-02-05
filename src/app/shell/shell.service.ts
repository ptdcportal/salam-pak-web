import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/auth';
import { ShellComponent } from './shell.component';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

/**
 * Provides helper methods to create routes.
 */
export class Shell {
  readonly messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: any): void {
    this.messageSource.next(message);
  }

  constructor(private httpClient: HttpClient) {
    this.getFilters().subscribe((data: any) => {
      this.changeMessage(data.data);
    });
  }
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      // canActivate: [AuthenticationGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true },
    };
  }
  getCurrenciesInfo(): Observable<any> {
    return this.httpClient.get(`${environment.serverUrl}/currencies`).pipe(map((body: any) => body.data));
  }
  getFilters() {
    return this.httpClient.get(`${environment.serverUrl}/filters`);
  }

  getProvinces() {
    return this.httpClient.get(`${environment.serverUrl}/location?locationType=province&pageSize=0`);
  }
}
