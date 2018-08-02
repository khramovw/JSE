import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilmListComponent} from './components/film-list/film-list.component';

const routes: Routes = [
  { path: '', component: FilmListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
