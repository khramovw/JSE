import { Component, OnInit } from '@angular/core';

// Services
import {FilmsService} from '../../services/films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  catalog;
  selected;
  plusOne;
  isshow;
  step;
  query: string;
  newlist;

  sortList = [
    {value: '0', viewValue: 'По алфавиту: A-Z'},
    {value: '1', viewValue: 'По алфавиту: Z-A'}
  ];

  constructor( private films: FilmsService ) { }

  ngOnInit() {
    // получаю список фильмов
    this.catalog = this.films.films;

    // Показываю первый экран фильмов
    this.isshow =  this.catalog.slice(0, 3);

    // Устанавливаю точку отсчета
    this.step = this.catalog.length - 3;

    // Получаю колличество фильмов в избранном
    this.addFavoriteList();

    // Сортирую фильмы в алфавитном порялке
    this.newListAZ();

  }

  // Добавляю/удаляю в иззбранное
  counterFavorite (film) {
    film.isFavarite = !film.isFavarite;
    this.addFavoriteList();
  }

  // Получаю колличество фильмов в избранном
  addFavoriteList () {
    this.plusOne = this.catalog.filter( item => item.isFavarite ).length;
  }

  sortListFilm () {
    if (  this.selected !== '0' ) {
      this.selected = '1';
      this.newListAZ();
    } else {
      this.selected = '0';
      this.newListZA();
    }
  }

  newListZA () {
    this.isshow.sort( ( prev, next ) => {

      if ( prev.name < next.name ) {
        return 1;
      }

      if ( prev.name > next.name ) {
        return -1;
      }

    });
  }

  newListAZ () {
    this.isshow.sort( ( prev, next ) => {

      if ( prev.name > next.name ) {
        return 1;
      }

      if ( prev.name < next.name ) {
        return -1;
      }

    });
  }

  witchAdd () {
    if ( this.step ) {
      this.step = this.step - 3;
      this.isshow = this.films.films.slice(0, ( this.catalog.length - this.step ));
    }
  }

  searchFilm () {
    if ( this.query && this.query.length > 1 ) {
      this.newlist = this.isshow.filter( film =>  film.name.toLowerCase().indexOf( this.query.toLowerCase() ) !== -1 );
      console.log(this.newlist);
      return this.isshow = this.newlist;
    } else {
      return this.isshow = this.films.films.slice(0, ( this.catalog.length - this.step ));
    }
  }

}
