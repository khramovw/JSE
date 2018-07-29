import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmsList;

  constructor( public filmsService: FilmService ) {
  }
  ngOnInit() {
    this.filmsList = this.filmsService.films;
  }
}
