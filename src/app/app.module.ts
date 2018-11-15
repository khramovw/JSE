import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Material modules
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatToolbarModule
} from '@angular/material';


import { AppComponent } from './app.component';
// Components
import { MainComponent } from './components/main/main.component';

import { FilmsComponent } from './components/main/films/films.component';
import { FilmComponent } from './components/main/films/film/film.component';
import { FilmDetailComponent } from './components/main/films/film-detail/film-detail.component';

import { ActorsComponent } from './components/main/actors/actors.component';

import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResoultComponent } from './components/search/search-resoult/search-resoult.component';
import { NoimagePipe } from './pipes/noimage.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilmsComponent,
    ActorsComponent,
    MainToolbarComponent,
    FilmComponent,
    SearchComponent,
    SearchResoultComponent,
    FilmDetailComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
