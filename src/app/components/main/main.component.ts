import { Component, OnInit } from '@angular/core';

// Services
import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  filmssearch = [];
  filmsobj;

  constructor( public moviedb: MoviedbService ) { }

  ngOnInit() {
    this.getPageofNumber(1);
  }

  //  Get search result
  getSearchResult (e) {
    // this.filmssearch = e.results;
    this.filmssearch = e;
    console.log('filmssearch', this.filmssearch );
  }

  getPageofNumber (pagenum: number = 1) {
    this.moviedb.getFilms(pagenum, '/top_rated').subscribe( ( list: any ) => {

      console.log(list);

      // Limit the number of characters in the description of the movie
      // and if the description is missing add a stub
      this.filmsobj = list.results;
      this.filmsobj.filter( el => {
        el.overview ? el.overview = el.overview.substr(0, 157) + '...' : el.overview = 'Описание к этому фильму скоро появиться ...' ;
      });

    }, err => console.log(err));
  }

}
