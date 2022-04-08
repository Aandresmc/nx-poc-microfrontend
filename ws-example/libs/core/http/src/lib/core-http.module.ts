import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from './http-client/ihttp-client';
import { AngularHttpClient } from './http-client/http-client';

@NgModule({
  imports: [CommonModule],
  providers: [{ provide: HttpClient, useClass: AngularHttpClient }],
})
export class CoreHttpModule {}
