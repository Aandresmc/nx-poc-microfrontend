import { HttpClient, HttpRequest as NgHttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpClient as IHttpClient,
} from './ihttp-client';

@Injectable({
  providedIn: 'root',
})
export class AngularHttpClient implements IHttpClient {
  constructor(private readonly _httpClient: HttpClient) {}
  async request(data: HttpRequest): Promise<HttpResponse> {
    let response;
    try {
      const request = new NgHttpRequest(data.method, data.url, data.body, {
        headers: data.headers,
      });
      response = await this._httpClient.request(request).toPromise();
      /*this._httpClient.request(request).subscribe((data) => {
        (response = data)
      } );*/
    } catch (error: any) {
      response = error?.response || error?.message;
    }
    return {
      statusCode: response.status,
      body: response.body,
    };
  }
}
