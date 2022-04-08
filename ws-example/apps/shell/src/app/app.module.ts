import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mfe';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'mfe1',
          loadChildren: () =>
            loadRemoteModule('mfe1', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'mfe2',
          loadChildren: () =>
            loadRemoteModule('mfe2', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
