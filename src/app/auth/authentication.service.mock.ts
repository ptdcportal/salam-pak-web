import { Observable, of } from 'rxjs';

// import  from './authentication.service';
// import { Credentials } from './credentials.service';

export class MockAuthenticationService {
  credentials: any | null = {
    email: 'test',
    token: '123',
  };

  login(context: any): Observable<any> {
    return of({
      email: context.email,
      token: '123456',
    });
  }

  logout(): Observable<boolean> {
    this.credentials = null;
    return of(true);
  }
}
