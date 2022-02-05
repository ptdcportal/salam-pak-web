import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const credentialsKey = 'credentials';

/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  private statusSource = new BehaviorSubject(localStorage.getItem('userId') !== null ? 'loggedIn' : 'loggedOut'); // set default status
  currentStatus = this.statusSource.asObservable();

  private _credentials: any = null;
  private _user: any = null;
  constructor() {
    const token = localStorage.getItem('token');
    if (token) {
      this._user = {
        email: localStorage.getItem('email'),
        userGender: localStorage.getItem('userGender'),
        userId: localStorage.getItem('userId'),
        token: localStorage.getItem('token'),
        userType: localStorage.getItem('userType'),
      };
    }
  }

  changeStatus(status: string) {
    this.statusSource.next(status);
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials(): any {
    return this._credentials;
  }

  // get loggedIn User
  get userInfo(): any {
    return this._user;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  setCredentials(credentials?: any, remember?: boolean) {
    this._credentials = credentials || null;
    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      for (const prop in credentials) {
        if (Object.prototype.hasOwnProperty.call(credentials, prop)) {
          storage.setItem(prop, credentials[prop]);
        }
      }
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }
  removeUserSession() {
    localStorage.removeItem('email');
    localStorage.removeItem('userGender');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.changeStatus('loggedOut');
  }
}
