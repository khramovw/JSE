import {Component, Input, OnInit} from '@angular/core';

// Services
import { MoviedbService } from '../../../../services/moviedb.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() film;
  imgsizepath = '';
  genresfilm;

  constructor( public moviedb: MoviedbService ) { }

  ngOnInit() {
    // console.log('genres', this.genres);

    // this.imgsizepath = this.moviedb.getParamsPostersSrc().bigBackPath;
    this.imgsizepath = this.moviedb.getParamsPostersSrc().smallBackPath;
    // this.imgsizepath = this.moviedb.getParamsPostersSrc().smallImgPath;

    this.getGenresList ();
  }

  getGenresList () {
    this.moviedb.getGenres().subscribe(  el => {
      // console.log('typeof', el.genres);
      this.genresfilm = el.genres;

      // console.log('typeof', this.genresfilm);

    }, error => console.log(error));
  }

}
