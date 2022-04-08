import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    // let currentUser = this.authenticationRepository.token();
    // if (currentUser && currentUser.access_token) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${currentUser.access_token}`,
    //       // TODO: set X-Forwarded-For with client ip
    //       //TODO: set CorrelationId by request
    //     },
    //   });
    // }

    return next.handle(request);
  }
}
