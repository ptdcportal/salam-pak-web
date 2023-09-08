import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CredentialsService } from './credentials.service';
import { map, catchError } from 'rxjs/operators';
const routes = {
  login: () => `/signin/`,
  signUp: () => '/signup',
  forgotPassword: () => '/resetPassword/request',
};

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: any = [];

  readonly messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: any): void {
    this.messageSource.next(message);
  }

  constructor(
    private credentialsService: CredentialsService,
    private httpClient: HttpClient
  ) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: any): Observable<any> {
    // Replace by proper authentication call

    let url = routes.login();
    if (context.provider == 'GOOGLE') {
      url = url + 'google';
    } else if (context.provider == 'FACEBOOK') {
      url = url + 'facebook';
    } else {
      url = url + 'local';
    }
    let body = context.password
      ? { email: context.email, password: context.password }
      : {
          token: context.authToken,
          email: context.email,
          firstName: context.firstName,
          id: context.id,
          lastName: context.lastName,
          name: context.name,
          photoUrl: context.photoUrl,
          provider: context.provider,
        };
    return this.httpClient.post(url, body).pipe(map((body: any) => body));
  }
  signUp(context: any): Observable<any> {
    return this.httpClient
      .post(routes.signUp(), context)
      .pipe(map((body: any) => body.data));
  }

  forgotPassword(context: any): Observable<any> {
    return this.httpClient
      .post(routes.forgotPassword(), context)
      .pipe(map((body: any) => body.data));
  }
  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.removeUserSession();

    return of(true);
  }
}
