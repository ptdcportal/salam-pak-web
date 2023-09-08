import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const routes = {
  resetPassword: (id: string) => `/users/${id}/password`,
  updateProfile: (id: string) => `/users/${id}/update`,
  getReviews: (id: any) => `/review/${id}`,
  getBookings: (params: any) => `/bookings?${params}`,
  changeProfilePhoto: (id: any) => `/users/${id}/photos`,
  getUserProfile: (id: any) => `/users/${id}`,
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  updateProfile(userId: string, data: any): Observable<any> {
    return this.httpClient
      .put(routes.updateProfile(userId), data)
      .pipe(map((body: any) => body.data));
  }
  resetPassword(userId: string, data: any): Observable<any> {
    return this.httpClient
      .put(routes.resetPassword(userId), data)
      .pipe(map((body: any) => body.data));
  }

  getUserReviews(userId: any) {
    return this.httpClient
      .get(routes.getReviews(userId))
      .pipe(map((body: any) => body.data));
  }

  getUserBookings(params: any) {
    return this.httpClient
      .get(routes.getBookings(params))
      .pipe(map((body: any) => body.data));
  }

  changeProfilePhoto(userId: any, data: any) {
    return this.httpClient
      .post(routes.changeProfilePhoto(userId), data)
      .pipe(map((body: any) => body.data));
  }

  getProfile(userId: any) {
    return this.httpClient
      .get(routes.getUserProfile(userId))
      .pipe(map((body: any) => body.data));
  }
}
