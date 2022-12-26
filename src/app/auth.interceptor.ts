import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { environment } from './environment/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const requestUrl = new URL(request.url);
    if (requestUrl.host === "newsapi.org") {
      request = request.clone({
        url: request.url + "&apiKey=" + environment.apikey
      });
    }
    return next.handle(request);
  }
}
