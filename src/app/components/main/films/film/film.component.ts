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
  @Input() filmadd;
  imgsizepath: string;
  genresfilm: Object;

  constructor( public moviedb: MoviedbService ) { }

  ngOnInit() {

    // this.imgsizepath = this.moviedb.getParamsPostersSrc().bigBackPath;
    this.imgsizepath = this.moviedb.getParamsPostersSrc().smallBackPath;
    // this.imgsizepath = this.moviedb.getParamsPostersSrc().smallImgPath;

    this.getGenresList ();
  }

  getGenresList() {
    this.moviedb.getGenres().subscribe(( el: any ) => {
      this.genresfilm = el.genres;
    }, error => console.log(error));
  }

}
