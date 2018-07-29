import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { TimeModuleComponent } from './components/time-module/time-module.component';
import { CountdownModuleComponent } from './components/countdown-module/countdown-module.component';

// Module
import { HelloModule } from './hello/hello.module';


@NgModule({
  declarations: [
    AppComponent,
    TimeModuleComponent,
    CountdownModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HelloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
