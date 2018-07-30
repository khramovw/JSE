import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneShopComponent } from './components/phone-shop/phone-shop.component';
import { MatBadgeModule, MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PhoneShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
