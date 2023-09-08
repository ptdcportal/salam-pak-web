import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/auth';
import { ShellComponent } from './shell.component';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import axios from 'axios';
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
    this.getFilters().then((data: any) => {
      this.changeMessage(data);
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
  getCurrenciesInfo() {
    return axios
      .get(`${environment.serverUrl}/currencies`)
      .then(function (response) {
        // handle success
        return response.data.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    // return this.httpClient.get(`${environment.serverUrl}/currencies`).pipe(map((body: any) => body.data));
  }
  getFilters() {
    return axios
      .get(`${environment.serverUrl}/filters`)
      .then(function (response) {
        // handle success
        return response.data.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    // return this.httpClient.get(`${environment.serverUrl}/filters`);
  }

  getProvinces() {
    return axios
      .get(`${environment.serverUrl}/location?locationType=province&pageSize=0`)
      .then(function (response) {
        // handle success
        return response.data.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    // return this.httpClient.get(`${environment.serverUrl}/location?locationType=province&pageSize=0`);
  }
}
