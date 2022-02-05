import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request?.urlWithParams.includes('wp-json/wp/v2/posts')) {
      request = request.clone({
        setHeaders: {
          authorization: `${localStorage.getItem('token')}`,
        },
      });
      return next.handle(request);
    } else {
      request = request.clone({
        setHeaders: {
          token: `${localStorage.getItem('token')}`,
        },
      });
      return next.handle(request);
    }
  }
}
