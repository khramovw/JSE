import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MainComponent } from './components/main/main.component';
import { FilmsComponent } from './components/main/films/films.component';
import { ActorsComponent } from './components/main/actors/actors.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'home', component: MainComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'actors', component: ActorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
