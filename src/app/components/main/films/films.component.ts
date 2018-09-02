import {Component, Input, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';

// Services
import { MoviedbService } from '../../../services/moviedb.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  @Input() searchresult;

  filmsobj;
  filmssearch = [];

  // MatPaginator Inputs
  length = 100;
  pageSize = 20;
  pageSizeOptions: number[] = [20, 40, 60, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  // numberpage = this.pageEvent.pageIndex;

  constructor( public moviedb: MoviedbService ) { }

  ngOnInit() {
    this.getPageofNumber(1);
  }

  getPageofNumber (pagenum: number = 1) {
    this.moviedb.getPopularFilms(pagenum).subscribe( ( popfilms: any ) => {
      console.log(popfilms);

      // Number of popular films
      this.length = popfilms.total_results;

      // Limit the number of characters in the description of the movie
      // and if the description is missing add a stub
      this.filmsobj = popfilms.results;
      this.filmsobj.filter( el => {
        el.overview ? el.overview = el.overview.substr(0, 157) + '...' : el.overview = 'Описание к этому фильму скоро появиться ...' ;
      });

    }, err => console.log(err));
  }

  // Pagination
  pageEventFoo(e, pageevent) {
    this.getPageofNumber(((e.pageIndex + 1) * (e.pageSize / 20)));
  }

  //  Get search result
  getSearchResult (e) {
    this.filmssearch = e.results;
    console.log('filmssearch', this.filmssearch );
  }
}
